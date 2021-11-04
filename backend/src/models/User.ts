import mongoose, { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

const AutoIncrement = require('mongoose-sequence')(mongoose);

export type UserType = {
    _id?: number,
    email: string,
    name: string,
    password: string
}

const UserSchema = new Schema<UserType>({
    _id: Number,
    email: { 
        type: String, 
        unique: true,
        required: true 
    },
    name: {
        type: String, 
        required: true 
    },
    password: {
        type: String, 
        required: true 
    }
}, { timestamps: true });

// Encrypt password
UserSchema.methods.encrypt = async function (password) {
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    this.password = encryptedPassword;
};
  
//Cryptography of password
UserSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
      const user = this;
      try {
        await user.encrypt(user.password);
        next();
      } catch (err:any) {
        next(err);
      }
    }
    next();
});
  
//check hashed password
UserSchema.methods.isCorrectPassword = async function (password) {
    const same = await bcrypt.compare(password, this.password);
    if (!same) throw new Error("Invalid password!");
};
  

UserSchema.plugin(AutoIncrement, { id: "user_id_counter", inc_field: "_id" });

module.exports = model<UserType>('Users', UserSchema);


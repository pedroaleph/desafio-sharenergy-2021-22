import { Router } from "express";

const Routes = Router();

// Routes.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });

Routes.get('/', (req, res) => {
    try {
        res.json({ success: true });
    } catch (error) {
        res.json({ success: false });
    }
});

export default Routes;
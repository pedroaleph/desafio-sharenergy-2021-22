import ButtonIcon from 'components/ButtonIcon';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { saveSessionData } from 'utils/auth';
import request from 'utils/request';
import './styles.scss';

type FormState = {
    email: string;
    password: string;
  }
  

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormState>();
    const [hasError, setHasError] = useState(false);
    const history = useHistory();

    const onSubmit = (data: FormState) => {
      console.log(data);
      request.post('/auth/login', data)
          .then(res => {
            //console.log(res);
            saveSessionData(res.data.access_token);
            history.push('/clients');
            alert('Sessão iniciada com sucesso!');
          })
          .catch((err) => {
            console.log(err);
            setHasError(true);
          })
      }

    return (
        <div className='login-container'>
            <h1>login</h1>
            {hasError && (
                <div className="alert alert-danger mt-1">
                    Usuário ou senha Inválidos!
                </div>
            )}
            <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
            <div className="margin-bottom-25">
          <input
            type="email"
            className={`form-control input-base ${errors.email ? 'is-invalid' : ''}`}
            placeholder="Email: desafio@sharenergy.com"
            {...register("email", {
              required: "Campo obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email inválido"
              }
            })}
          />
          {errors.email && (
            <div className="invalid-feedback d-block">
              {errors.email.message}
            </div>
          )}
        </div>
        <div className="margin-bottom-25">
          <input
            type="password"
            className={`form-control input-base ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Senha: 123456"
            {...register("password", { required: "Campo obrigatório" })}
          />
          {errors.password && (
            <div className="invalid-feedback d-block mb-1">
              {errors.password.message}
            </div>
          )}
          <Link to="/auth/login" className="login-link-recover">
            Esqueci a senha?
          </Link>
        </div>
        <div className="login-submit margin-bottom-25">
          <ButtonIcon text='entrar' />
        </div>
        <div className="text-center">
          <span className="not-registered">
            Não tem Cadastro?
          </span>
          <Link to="/auth/login" className="login-link-register">
            CADASTRAR
          </Link>
        </div>
            </form>
        </div>
    );
}

export default Login;
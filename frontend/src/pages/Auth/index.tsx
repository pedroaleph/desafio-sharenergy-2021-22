import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import './styles.scss';

const Auth = () => {
    return (
        <div className='auth-container'>
            <div className='card-base auth-card'>
                <div className='auth-info'>
                    <h5>Entre utilizando esta conta para gerenciar os clientes:</h5>
                    <p>
                        <span>
                            - email: desafio@sharenergy.com
                        </span>
                        <br />
                        <span>
                            - senha: 123456
                        </span>
                    </p>
                    
                </div>
                <div className='auth-content'>
                    <Switch>
                        <Route path='/auth/login' exact >
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default Auth;
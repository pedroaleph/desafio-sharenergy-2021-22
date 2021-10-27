import { Link, NavLink } from 'react-router-dom';
import './styles.scss';

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <Link to='/' className='navbar-title'>
                    <h1 style={{ color: '#9e9e9e' }}>
                        desafio
                    </h1>
                    <h1 className='text-secondary'>
                        share
                    </h1>
                    <h1 className='text-primary' style={{ marginLeft: '-5%' }}>
                        energy
                    </h1>
                    <h1 style={{ color: '#8C8863', marginLeft: '-32.75%' }}>
                        e
                    </h1>
            </Link>
            <ul className='navbar-menu'>
                <li>
                    <NavLink to='/'>
                        gráficos
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                        clientes
                    </NavLink>
                </li>
                <li className='navbar-btn-container'>
                    <Link to='/' className='btn btn-primary navbar-btn'>
                        Entrar
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
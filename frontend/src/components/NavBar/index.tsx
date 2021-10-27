import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as OpenMenu } from 'assets/images/menu-icon.svg';
import { ReactComponent as CloseMenu } from 'assets/images/close-icon.svg';
import './styles.scss';

const NavBar = () => {
    const [isLogged,  setIsLogged] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isMobileModeActive, setIsMobileModeActive] = useState(false);

    window.addEventListener(
        'resize',() => (window.innerWidth > 768) ? setIsMobileModeActive(false) : setIsMobileModeActive(true)
    );

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
    }

    useEffect(() => {

    }, [])


    return (
        <nav className='navbar-container'>
            <div className='navbar-title-container'>
                <Link to='/' className='navbar-title'>
                        <h1 style={{ color: '#9E9E9E', marginRight: 5 }}>
                            desafio
                        </h1>
                        <h1 className='text-secondary'>
                            shar
                        </h1>
                        <h1 style={{ color: '#8C8863'}}>
                            e
                        </h1>
                        <h1 className='text-primary'>
                            nergy
                        </h1>
                </Link>
                <button
                    className='navbar-menu-mobile-btn'
                    type='button'
                    onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                >
                    { isDrawerOpen ? <CloseMenu /> : <OpenMenu /> }
                </button>
            </div>
            <div className={ (isMobileModeActive && isDrawerOpen) ? 'navbar-menu-mobile-container' : 'navbar-menu-container'}>
                <ul className='navbar-menu-content'>
                    <li>
                        <NavLink to='/' onClick={handleCloseDrawer}>
                            gráficos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/' onClick={handleCloseDrawer}>
                            clientes
                        </NavLink>
                    </li>
                    <li className={ isMobileModeActive  ? '' : 'navbar-btn-container' }>
                        <Link
                            to='/'
                            className={ isMobileModeActive  ? '' : 'btn btn-primary navbar-btn' }
                            onClick={() => {
                                setIsLogged(!isLogged);
                                handleCloseDrawer();
                            }}
                        >
                            { isLogged ? 'sair' : 'entrar' }
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
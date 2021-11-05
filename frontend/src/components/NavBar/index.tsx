import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as OpenMenu } from 'assets/images/menu-icon.svg';
import { ReactComponent as CloseMenu } from 'assets/images/close-icon.svg';
import './styles.scss';
import { getSessionData, logout } from 'utils/auth';

const NavBar = () => {
    const [isLogged,  setIsLogged] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isResponsiveModeActive, setIsResponsiveModeActive] = useState(false);
    const location = useLocation();

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
    }

    useEffect(() => {
        window.addEventListener(
            'resize', () => (window.innerWidth > 768)
                ? setIsResponsiveModeActive(false)
                : setIsResponsiveModeActive(true)
        );

        setIsLogged(Boolean(getSessionData()));
    }, [location]);


    return (
        <nav
            className='navbar-container'
            // style={ (isDrawerOpen && isResponsiveModeActive ) ? { marginBottom: 150 } : {} }
        >
            <div className='navbar-title-container'>
                <Link to='/' className='navbar-title'>
                        <h1 className='text-gray me-2'>
                            desafio
                        </h1>
                        <h1 className='text-secondary'>
                            Shar
                        </h1>
                        <h1 className='text-thirdy'>
                            e
                        </h1>
                        <h1 className='text-primary'>
                            nergy
                        </h1>
                </Link>
                <button
                    className='navbar-menu-mobile-btn'
                    type='button'
                    onClick={() => {
                        setIsResponsiveModeActive(true);
                        setIsDrawerOpen(!isDrawerOpen)
                    }}
                >
                    { isDrawerOpen ? <CloseMenu /> : <OpenMenu /> }
                </button>
            </div>
            <div className={
                    (isResponsiveModeActive && isDrawerOpen)
                    ? 'navbar-menu-mobile-container'
                    : 'navbar-menu-container'
                }
            >
                <ul className='navbar-menu-content'>
                <li>
                        <Link to='/' onClick={handleCloseDrawer}>
                            início
                        </Link>
                    </li>
                    <li>
                        <Link to='/charts' onClick={handleCloseDrawer}>
                            gráficos
                        </Link>
                    </li>
                    <li>
                        <Link to='/clients' onClick={handleCloseDrawer}>
                            clientes
                        </Link>
                    </li>
                    <li className={
                            isResponsiveModeActive
                            ? '' : 'navbar-btn-container'
                        }
                    >
                        <Link
                            to='/auth/login'
                            className={
                                isResponsiveModeActive
                                ? '' : 'btn btn-primary navbar-btn'
                            }
                            onClick={() => {
                                if(isLogged) logout();
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
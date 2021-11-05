import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { isAuthenticated } from 'utils/auth';
import './styles.scss';

const ClientsPage = () => {
    const history = useHistory();


    useEffect(() => {
        if(!isAuthenticated())
            history.replace('/auth/login');

    }, [history]);
    return (
        <div className=''>

        </div>
    );
}

export default ClientsPage;
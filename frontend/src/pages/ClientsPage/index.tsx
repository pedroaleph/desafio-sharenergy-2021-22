import ButtonIcon from 'components/ButtonIcon';
import Pagination from 'components/Pagination';
import SearchInput from 'components/SearchInput';
import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ClientsResponse } from 'types/Clients';
import { getSessionData, isAuthenticated } from 'utils/auth';
import request from 'utils/request';
import ClientCard from './ClientCard';
import './styles.scss';

const ClientsPage = () => {
    const history = useHistory();
    const [clientsResponse, setClientsResponse] = useState<ClientsResponse>();
    const [clientName, setClientName] = useState('');
    const [activePage, setActivePage] = useState(0);


    const getClients = useCallback(() => {
        request.get(`/clients?name=${clientName}&size=3&page=${activePage}`)
            .then(res => {
                const data = res.data;
                //console.log(data);
                setActivePage(data.page);
                setClientsResponse(data);
            })
            .catch(err => {
                console.log(err);
                alert('Falha ao carregar dados dos clientes');
            });
    }, [clientName, activePage]);

    const onRemove = (id: number) => {
        const confirm = window.confirm('Deseja realmente excluir este cliente?');

        if (confirm) {
            const headers = {
                Authorization: getSessionData()
            }

            request.delete(`/clients/${id}`, { headers })
                .then(() => {
                    alert('Cliente excluido com sucesso!');
                    getClients();
                })
                .catch((err) => {
                    console.log(err.response);
                    alert('Erro ao remover cliente!');
                });
        }
    }


    useEffect(() => {
        if (!isAuthenticated())
            history.replace('/auth/login');
        else getClients();
    }, [history, getClients]);

    return (
        <div className='clients-page-container'>
            <div className='client-search-add-container card-base'>
                <ButtonIcon
                    text='adicionar'
                    onClickButton={() => history.push('/clients/create')}
                />
                <SearchInput OnChangeText={text => setClientName(text)} />
            </div>
            <div className='clients-page-content'>
                {clientsResponse && clientsResponse.content.map(
                    client => (
                        <ClientCard
                            key={client._id}
                            client={client}
                            onRemove={onRemove}
                        />
                    )
                )}
            </div>
            <div className='clients-pagination-container card-base'>
                {
                    clientsResponse && (
                        <Pagination
                            totalPages={clientsResponse.totalPages}
                            onChange={page => setActivePage(page)}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default ClientsPage;
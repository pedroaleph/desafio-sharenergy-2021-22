import ButtonIcon from 'components/ButtonIcon';
import { useHistory } from 'react-router-dom';
import './styles.scss';

const HomePage = () => {
    const history = useHistory();

    return (
        <div className='card-base'>
            <div className='home-page-container'>
                <h1 className='home-title' >
                    desafio sharenergy
                </h1>
                <p className='home-subtitle'>
                    Esta aplicação se destina ao <a
                            href="https://github.com/SHARENERGY-OFICIAL/desafio-sharenergy-2021-22.git"
                            target="_blank"
                            rel="noreferrer"
                        >
                            desafio
                        </a> para o processo seletivo da <strong>SHARENERGY 2021/22</strong>
                </p>
                <p className='home-description'>
                    A aplicação consiste de forma simplificada na: <br />
                    <br />
                        <span>
                            - Visualização de dados de uma usina fotovoltaica (gráfico)
                        </span>
                    <br />
                        <span>
                            - Visualização de dados de retorno financeiro dos clientes (gráfico)
                        </span>
                    <br />
                        <span>
                            - Gerenciamento de clientes (CRUD, necessário login para editar)
                        </span>
                    <br />
                </p>
                <div className='home-btns-container'>
                    <ButtonIcon
                        text='acessar página de gráficos'
                        onClickButton={() => history.push('/charts')}
                    />
                    <ButtonIcon
                        text='acessar página de clientes'
                        onClickButton={() => history.push('/clients')}
                    />
                </div>
                <p className='home-developer'>
                    App desenvolvido por <a
                            href="https://github.com/pedroaleph"
                            target="_blank"
                            rel="noreferrer"
                    >
                        Pedro Aleph
                    </a>
                </p>
            </div>
        </div>
    );
}

export default HomePage;
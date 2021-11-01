import ButtonIcon from 'components/ButtonIcon';
import './styles.scss';

const HomePage = () => {
    return (
        <div className='card-base'>
            <div className='home-page-container'>
                <h1 className='home-title' >
                    desafio sharenergy
                </h1>
                <p className='home-subtitle'>
                    Esta aplicação se destina o <a
                            href="https://github.com/SHARENERGY-OFICIAL/desafio-sharenergy-2021-22.git"
                            target="_blank"
                            rel="noreferrer"
                        >
                            desafio
                        </a> para o processo seletivo da <strong>SHARENERGY 2021/22</strong>
                </p>
                <p className='home-description'>
                    O aplicativo consisti de forma simplificada em: <br />
                    <br />
                        <span>
                            Visualização de dados de uma usina fotovoltaica (gráfico)
                        </span>
                    <br />
                        <span>
                            Visualização de dados de retorno de financeiro dos clientes (gráfico)
                        </span>
                    <br />
                        <span>
                            Gerenciamento de clientes (CRUD, necessário login para editar)
                        </span>
                    <br />
                </p>
                <div className='home-btns-container'>
                    <ButtonIcon path='/charts' text='acessar página de gráficos' />
                    <ButtonIcon  path='/clients' text='acessar página de clientes' />
                </div>
                <p className='home-developer'>
                    Desenvolvido por <a
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
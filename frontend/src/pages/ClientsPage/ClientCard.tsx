import { ClientData } from 'types/Clients';

type Props = {
    client: ClientData,
    onRemove: (id: number) => void;
}

const ClientCard = ({ client, onRemove }: Props) => {
    const { _id, emailCliente, nomeCliente, usinas } = client;
    const isPlantExists = usinas && usinas.length;

    return (
        <div className='client-card-container card-base'>
           <div className='client-card-info'>
                <p>
                    Número: { _id }
                </p>
                <p>
                    Email: { emailCliente }
                </p>
                <p>
                    Nome: { nomeCliente }
                </p>
           </div>
           <div className='client-card-btns'>
                <button
                    type='button'
                    className='btn btn-outline-info'
                >
                    EDITAR
               </button>
               <button
                    type='button'
                    className='btn btn-outline-danger'
                    disabled={ isPlantExists ? false : true }
                    onClick={() => onRemove(_id as number)}
                >
                    EXCLUIR
               </button>
           </div>
        </div>
    );
}

export default ClientCard;
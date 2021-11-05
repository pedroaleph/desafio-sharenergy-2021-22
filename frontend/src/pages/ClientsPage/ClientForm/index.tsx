import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { getSessionData, isAuthenticated } from 'utils/auth';
import request from 'utils/request';
import './styles.scss';

type FormState = {
    emailCliente: string,
    nomeCliente: string
}

type ParamsType = {
    id: string
}

const headers = {
    Authorization: getSessionData()
}

const ClientForm = () => {
    const { id } = useParams<ParamsType>();
    const isEditing = id !== 'create';
    const formTitle = isEditing ? 'Editar Cliente' : 'Cadastrar um Cliente';
    const {
        register, handleSubmit, formState: { errors }, setValue
    } = useForm<FormState>();
    const history = useHistory();

    const getClient = useCallback(() => {
        
        request.get(`/clients/${id}`, { headers })
            .then(res  => {
                setValue('emailCliente', res.data.emailCliente);
                setValue('nomeCliente', res.data.nomeCliente);
            })
            .catch(err => {
                console.log(err.response);
                history.replace('/clients');
                alert('Falha ao carregar dados do cliente');
            });
    }, [history, id, setValue]);

    useEffect(() => {
        if(!isAuthenticated())
            history.replace('/auth/login');
        
        if(isEditing) getClient();
    }, [history, isEditing, getClient]);


    const onSubmit = (data: FormState) => {
        request[isEditing ? 'put' : 'post']
            (isEditing ? `/clients/${id}` : '/clients', data, { headers })
            .then(res => {
                history.push('/clients');
                alert('Cliente salvo com sucesso!');
            })
            .catch(err => {
                console.log(err.response);
                alert('Erro ao salvar cliente!');
            });
    }

    return (
        <div className='client-form-container'>
            <div className='card-base client-form-card'>
                <form className='client-form-content' onSubmit={handleSubmit(onSubmit)}>
                    <h4>
                        {formTitle}
                    </h4>
                    { isEditing && (
                        <p>
                            Número do cliente: {id}
                        </p>
                    ) }
                    <div className="margin-bottom-25">
                        <input
                            {...register("emailCliente", {
                                required: "Campo obrigatório",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Email inválido"
                                }
                            })}
                            type="text"
                            className="form-control input-base"
                            placeholder="Email do cliente"
                        />
                        {errors.emailCliente && (
                            <div className="invalid-feedback d-block">
                                {errors.emailCliente.message}
                            </div>
                        )}
                    </div>
                    <div className="margin-bottom-25">
                        <input
                            {...register("nomeCliente", { required: "Campo obrigatório" })}
                            type="text"
                            className="form-control input-base"
                            placeholder="Nome do cliente"
                        />
                        {errors.nomeCliente && (
                            <div className="invalid-feedback d-block">
                                {errors.nomeCliente.message}
                            </div>
                        )}
                    </div>
                    <div className='client-form-actions'>
                        <button
                            className='btn btn-outline-primary'
                        >
                            SALVAR
                        </button>
                        <button
                            type='button'
                            className='btn btn-outline-danger'
                            onClick={() => history.replace('/clients')}
                        >
                            CANCELAR
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ClientForm;
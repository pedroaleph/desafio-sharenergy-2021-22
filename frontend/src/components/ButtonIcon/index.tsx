import './styles.scss';

type Props = {
    text: string
}

const ButtonIcon = ({ text }: Props) => {
    return (
        
        <button
            className="btn btn-primary button-icon-container"
        >
            <h5>
                {text}
            </h5>
        </button>
    );
}

export default ButtonIcon;
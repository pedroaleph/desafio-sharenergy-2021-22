import './styles.scss';

type Props = {
    text: string
    onClickButton: () => void
}

const ButtonIcon = ({ text, onClickButton }: Props) => {
    return (
        
        <button
            type="button"
            className="btn btn-primary button-icon-container"
            onClick={onClickButton}
        >
            <h5>
                {text}
            </h5>
        </button>
    );
}

export default ButtonIcon;
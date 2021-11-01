import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
    path: string
    text: string
}

const ButtonIcon = ({ path, text }: Props) => {
    return (
        <Link to={path}>
            <button
                type="button"
                className="btn btn-primary button-icon-container"
            >
                <p>
                    {text}
                </p>
            </button>
        </Link>
    );
}

export default ButtonIcon;
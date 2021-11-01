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
                <h5>
                    {text}
                </h5>
            </button>
        </Link>
    );
}

export default ButtonIcon;
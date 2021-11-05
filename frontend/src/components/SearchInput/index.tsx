import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import './styles.scss';


type Props = {
    OnChangeText: (text: string) => void;
}

const SearchInput = ({ OnChangeText }: Props) => {
    return (
        <div className='search-input-container'>
           <input
                type="text"
                className="form-control"
                placeholder={'Pesquisar por nome'}
                onChange={item => OnChangeText(item.target.value)}
            />
                <SearchIcon />
        </div>
    );
}

export default SearchInput;
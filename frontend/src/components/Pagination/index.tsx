import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ReactPaginate from 'react-paginate';
import './styles.scss';

type Props = {
    totalPages: number;
    onChange: (item: number) => void;
}

const Pagination = ({ totalPages, onChange }: Props) => {
    const renderIcon = (type: 'previous'| 'next') => (
        <ArrowIcon
            className={`pagination-${type}`}
            data-testid={`arrow-icon-${type}`}
        />
    );
    return (
        <div className="pagination-container">
            <ReactPaginate
                pageCount={totalPages}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                onPageChange={selectItem => onChange(selectItem.selected)}
                previousLabel={renderIcon('previous')}
                nextLabel={renderIcon('next')}
                containerClassName="pagination"
                pageLinkClassName="pagination-item"
                breakClassName="pagination-item page-inactive"
                activeLinkClassName="active"
                previousClassName="page-active"
                nextClassName="page-active"
                disabledClassName="page-inactive"
            />
        </div>
    )
}
export default Pagination;
import ReactPaginate from 'react-paginate'
import style from './pagination.module.scss'

type Props = {
    currentPage: number,
    countPizzaz: number,
    onChange: (number: number) => void
}

export const Pagination = ({ onChange, countPizzaz, currentPage }: Props) => {
    return (
        <ReactPaginate
            className={style.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(e) => onChange(e.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={Math.ceil(countPizzaz / 4)}
            forcePage={currentPage - 1}
            previousLabel="<"
        // renderOnZeroPageCount={null}
        />
    )
}
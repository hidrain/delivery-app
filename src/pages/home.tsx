import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Categories } from '../components/categories'
import { Pagination } from '../components/pagination'
import { PizzaBlock } from '../components/pizzaBlock'
import Skeleton from '../components/pizzaBlock/skeleton'
import { Sort } from '../components/sort'
import { selectFilter, setCategoryId, setCurrentPage } from '../redux/slices/filterSlice'
import { useAppDispatch } from '../redux/store'
import { fetchPizzas, selectPizzaData } from '../redux/slices/pizzaSlice'
import { Link } from 'react-router-dom'

type Props = {}

export const Home = (props: Props) => {

    const dispatch = useAppDispatch()
    const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter)
    const { status, items } = useSelector(selectPizzaData)

    const onChangeCategory = (id: number) => {
        dispatch(setCategoryId(id))
    }
    const onChangePage = (number: number) => {
        dispatch(setCurrentPage(number))
    }

    const getPizzas = () => {
        // backend searchvalue filter 
        // const search = searchValue ? `&search=${searchValue}` : ''
        const params = { currentPage, categoryId, sort }
        dispatch(fetchPizzas(params));

        window.scrollTo(0, 0)
    }


    useEffect(() => {
        getPizzas()
    }, [categoryId, sort, currentPage])

    const pizzaz = items
        .filter((obj: any) => {
            if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
                return true
            }
            return false
        })
        .map((obj: any) => (
            <Link to={`pizza/${obj.id}`} key={obj.id}>
                <PizzaBlock {...obj} />
            </Link>
        ))

    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)
    const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    value={categoryId}
                    onChangeCategory={onChangeCategory} />
                <Sort />
            </div>

            <h2 className="content__title">All pizzas</h2>

            {
                status === 'error' ? <div className="content__error-info">
                    <h2>Error <span>😕</span></h2>
                    <p>Failed to get pizzas</p>
                </div> : <div className="content__items">
                    {
                        status === 'loading'
                            ? skeletons
                            : pizzas
                        // items.map((obj: any) => (<PizzaBlock {...obj} key={obj.id} />))
                    }
                </div>
            }

            <Pagination
                currentPage={currentPage}
                onChange={onChangePage}
            />
        </div>
    )
}
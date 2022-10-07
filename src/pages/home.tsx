import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { SearchContext } from '../App'
import { Categories } from '../components/categories'
import { Pagination } from '../components/pagination'
import { PizzaBlock } from '../components/pizzaBlock'
import Skeleton from '../components/pizzaBlock/skeleton'
import { Sort } from '../components/sort'
import { setCategoryId } from '../redux/slices/filterSlice'
import { RootState } from '../redux/store'

type Props = {}

export const Home = (props: Props) => {

    const dispatch = useDispatch()
    const { categoryId, sortType } = useSelector((state: RootState) => ({
        categoryId: state.filter.categoryId,
        sortType: state.filter.sort
    }))

    // @ts-ignore
    const { searchValue } = React.useContext(SearchContext)

    const [items, setItems] = useState([])
    const [countPizzaz, setCountPizzaz] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    const onChangeCategory = (id: number) => {
        dispatch(setCategoryId(id))
    }

    useEffect(() => {
        setIsLoading(true)

        // backend searchvalue filter 
        // const search = searchValue ? `&search=${searchValue}` : ''

        axios
            .get(`https://62ff03f741165d66bfc7f607.mockapi.io/items?page=${currentPage}&limit=4&${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType.sortProperty}&order=${sortType.order}`
            )
            .then(response => {
                setItems(response.data.items);
                setCountPizzaz(response.data.count)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortType, currentPage, countPizzaz])

    const pizzaz = items
        .filter((obj: any) => {
            if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
                return true
            }
            return false
        })
        .map((obj: any) => (<PizzaBlock {...obj} key={obj.id} />))
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />)

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    value={categoryId}
                    onChangeCategory={onChangeCategory} />
                <Sort />
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
                {
                    isLoading
                        ? skeletons
                        : pizzaz
                    // items.map((obj: any) => (<PizzaBlock {...obj} key={obj.id} />))
                }
            </div>
            <Pagination onChange={(number: number) => { setCurrentPage(number) }} countPizzaz={countPizzaz} />
        </div>
    )
}
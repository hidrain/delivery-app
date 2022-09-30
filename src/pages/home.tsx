import React, { useEffect, useState } from 'react'
import { Categories } from '../components/categories'
import { Pagination } from '../components/pagination'
import { PizzaBlock } from '../components/pizzaBlock'
import Skeleton from '../components/pizzaBlock/skeleton'
import { Sort } from '../components/sort'

type Props = {
    searchValue: string
}

export const Home = ({ searchValue }: Props) => {

    const [items, setItems] = useState([])
    const [countPizzaz, setCountPizzaz] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [categoryId, setCategoryId] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [sortType, setSortType] = useState({
        name: 'rating',
        sortProperty: 'rating',
        order: 'desc'
    })

    useEffect(() => {
        setIsLoading(true)

        // backend searchvalue filter 
        // const search = searchValue ? `&search=${searchValue}` : ''

        fetch(`https://62ff03f741165d66bfc7f607.mockapi.io/items?page=${currentPage}&limit=4&${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType.sortProperty}&order=${sortType.order}`)
            .then((response) => response.json())
            .then((response) => {
                setItems(response.items);
                setCountPizzaz(response.count)
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
                    onChangeCategory={(index: any) => setCategoryId(index)} />
                <Sort
                    value={sortType}
                    onChangeSort={(index: any) => setSortType(index)} />
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
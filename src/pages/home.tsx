import React, { useEffect, useState } from 'react'
import { Categories } from '../components/categories'
import { PizzaBlock } from '../components/pizzaBlock'
import Skeleton from '../components/pizzaBlock/skeleton'
import { Sort } from '../components/sort'

type Props = {}

export const Home = (props: Props) => {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [categoryId, setCategoryId] = useState(0)
    const [sortType, setSortType] = useState({
        name: 'rating',
        sortProperty: 'rating',
        order: 'desc'
    })

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://62ff03f741165d66bfc7f607.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType.sortProperty}&order=${sortType.order}`)
            .then((response) => response.json())
            .then((response) => {
                setItems(response)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortType])

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
                        ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                        : items.map((obj: any) => (<PizzaBlock {...obj} key={obj.id} />))
                }
            </div>
        </div>
    )
}
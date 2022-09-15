import React, { useEffect, useState } from 'react';
import './scss/app.scss'
import { Header } from './components/header'
import { Categories } from './components/categories'
import { Sort } from './components/sort'
import { PizzaBlock } from './components/pizzaBlock'
import Skeleton from './components/pizzaBlock/skeleton';
// import * as pizzas from './assets/pizzas.json'

function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://62ff03f741165d66bfc7f607.mockapi.io/items')
      .then((response) => response.json())
      .then((response) => {
        setItems(response)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
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
      </div>
    </div>
  )
}

export default App;

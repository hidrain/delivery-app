import React, { useEffect, useState } from 'react';
import './scss/app.scss'
import { Header } from './components/Header'
import { Categories } from './components/Categories'
import { Sort } from './components/Sort'
import { PizzaBlock } from './components/PizzaBlock'
// import * as pizzas from './assets/pizzas.json'

function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://62ff03f741165d66bfc7f607.mockapi.io/items')
      .then((response) => response.json())
      .then((response) => setItems(response))
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
              items.map((obj: any) => (
                <PizzaBlock {...obj} key={obj.id} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

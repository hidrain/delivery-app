import React, { useEffect, useState } from 'react';
import './scss/app.scss'
import { Header } from './components/header'
import { Categories } from './components/categories'
import { Sort } from './components/sort'
import { PizzaBlock } from './components/pizzaBlock'
import Skeleton from './components/pizzaBlock/skeleton';
import { Home } from './pages/home';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './pages/notFound';
import { Cart } from './pages/cart';

function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;

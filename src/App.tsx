import React, { useState } from 'react';
import './scss/app.scss'
import { Header } from './components/header'
import { Home } from './pages/home';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './pages/notFound';
import { Cart } from './pages/cart';

// @ts-ignore
export const SearchContext = React.createContext();

function App() {

  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  )
}

export default App;

import React from 'react'
import './App.css';
import Header from './page/header/Header';
import Home from './page/Home';
import Footer from './page/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Search } from './page/search/Search';
import SearchPage from './page/search/SearchPage';
import Login from './components/login/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/search' element = {<SearchPage/>} />
      <Route path='/login' element = {<Login/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
import React from 'react'
import './App.css';
import Header from './page/header/Header';
import Home from './page/Home';
import Footer from './page/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Search } from './page/search/Search';
import SearchPage from './page/search/SearchPage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Manager from './components/manager/Manager';
import ManagerRegister from './components/register/ManagerRegister';
import Profile from './components/profile/Profile';
import Room from './components/room/Room';
import Reserve from './components/reserve/Reserve';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/search' element = {<SearchPage/>} />
      <Route path='/reserve' element = {<Reserve/>} />

      <Route path='/room/:id' element = {<Room/>} />

      <Route path='/login' element = {<Login/>} />
      <Route path='/register' element = {<Register/>} />

      <Route path='/manager' element= {<Manager/>} />
      <Route path='/manager-register' element= {<ManagerRegister/>} />

      <Route path='/profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
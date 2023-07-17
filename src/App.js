
import './App.css';
//import Main from './semantic/Main';
import Header from './semantic/Header';

import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Specials } from './components/Specials';
import { Orders } from './components/Orders';
import { Login } from './components/Login';
import { BookingPage } from './components/BookingPage';
function App() {
  return (
    <>
      <header className='App-header'>
        <Header />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-me' element={<About />} />
        <Route path='/menu' element={<Specials />} />
        <Route path='/reservations' element={<BookingPage />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

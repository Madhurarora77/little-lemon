
import './App.css';
//import Main from './semantic/Main';
import Header from './semantic/Header';

import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Specials } from './components/Specials';
import { Orders } from './components/Orders';
import { Login } from './components/Login';
import { Booking } from './components/Booking';
import { BookingConfirmed } from './components/BookingConfirmed'
import Footer from './semantic/Footer';
function App() {
  return (
    <>
      <header className='App-header'>
        <Header />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/menu' element={<Specials />} />
        <Route path='/reservations' element={<Booking />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/login' element={<Login />} />
        <Route path='/BookingConfirmed' element={<BookingConfirmed />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getEvents } from './store/actions/eventsActions';
import { checkAuth } from './store/actions/authActions';

import EventView from './views/EventView';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import LogoutView from './views/LogoutView';
import EventDetailsView from './views/EventDetailsView';
import AddEvent from './components/events/AddEvent';
import CheckoutView from './views/CheckoutView';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents())
    dispatch(checkAuth())
  }, [dispatch])


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <EventView /> } />
          <Route path="/login" element={ <LoginView /> } />
          <Route path="/logout" element={ <LogoutView /> } />
          <Route path="/event" element={ <EventView /> } />
          <Route path="/register" element={ <RegisterView /> } />
          <Route path="/details/:id" element={ <EventDetailsView /> } />
          <Route path="/addevent" element={ <AddEvent /> } />
          <Route path="/checkout" element={ <CheckoutView /> } />
          
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;

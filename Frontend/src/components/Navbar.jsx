import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import logo from '../assets/logo.png'
import AddEvent from './events/AddEvent'


const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false)

  const {token} = useSelector(state => state.authReducer)

 const toggleCart = () => {
   if (cartOpen === true) {
      setCartOpen(false)
     }else {
      setCartOpen(true)
     }
  
}

  return (
    <>
    {cartOpen && <div className="overlay" onClick={toggleCart}></div>}
    <div className="navbar">
      <div className="container">
        
        <div className="navbar__logo">
          <Link to="/">
            <h1>EVENT TRACKER</h1>
          </Link>
        </div>
        <div>
        <Link to="/pastEvents">
          <button className="btn navbar-btn"><i className="fa-solid fa-user"></i>Past Events</button>
        </Link>
        </div>

        <div className="cart">
            <div className="cart-btn" onClick={toggleCart}>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            {cartOpen && <AddEvent toggleCart={toggleCart} />}
        </div>

        <div className="navbar__actions">
          {token
          ? (
            <Link to="/logout">
            <button className="btn navbar-btn"><i className="fa-solid fa-user"></i>Logout</button>
            </Link>
          )
          : (
          <Link to="/login">
          <button className="btn navbar-btn"><i className="fa-solid fa-user"></i>Login</button>
          </Link>
          )
          }
        </div>
                
      </div>
    </div>
    </>
  )
}

export default Navbar
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" >
          OnlineStore
        </NavLink>
        <div className="navbar-menu">
          <NavLink to="/" className="navbar-item" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/products" className="navbar-item" activeClassName="active">
            Products
          </NavLink>
          <NavLink to="/cart" className="navbar-item" activeClassName="active">
            Cart
          </NavLink>
        </div>
      </div>
    </nav>
    );
  }


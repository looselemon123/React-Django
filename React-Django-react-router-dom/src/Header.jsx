import "./App.css"; 
import { Link } from "react-router-dom";

function Header({count}) {
  return (
    <>
      <nav>
        <div className="logo">Maison <span>Lumière</span></div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="nav-actions">
          <button className="nav-btn cart-btn">Cart <span className="count">({count})</span></button>
        </div>
      </nav>
    </>
  )
}
export default Header
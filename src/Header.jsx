import "./App.css"; 
import { Link } from "react-router-dom";

function Header() {
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
          <button className="nav-btn">Cart (0)</button>
        </div>
      </nav>
    </>
  )
}
export default Header
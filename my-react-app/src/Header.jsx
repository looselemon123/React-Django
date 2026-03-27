import "./App.css"; 

function Header() {
  return (
    <>
      <nav>
        <div className="logo">Maison <span>Lumière</span></div>
        <ul className="nav-links">
          <li><a href="Home.jsx">Home</a></li>
          <li><a href="Shop.jsx">Shop</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-actions">
          <button className="nav-btn">Cart (0)</button>
        </div>
      </nav>
    </>
  )
}
export default Header
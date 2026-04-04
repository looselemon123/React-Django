import './App.css';

function Footer() {
    return(
        <footer className="footer">
  <div className="footer-container">
    <div className="footer-brand">
      <h2 className="logo">Maison <span>Lumière</span></h2>
      <p className="footer-tagline">Where Artistry Meets Beauty. <br /> Crafted with intention, formulated for ritual.</p>
    </div>

    <div className="footer-links">
      <div className="footer-col">
        <h5>Shop</h5>
        <a href="#eyes">Eye Care</a>
        <a href="#lips">Lip Color</a>
        <a href="#sets">The Sets</a>
      </div>
      <div className="footer-col">
        <h5>Maison</h5>
        <a href="#story">Our Story</a>
        <a href="#sustainability">Sustainability</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-col">
        <h5>Social</h5>
        <a href="#ig">Instagram</a>
        <a href="#tk">TikTok</a>
        <a href="#pt">Pinterest</a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; 2026 Maison Lumière. All rights reserved.</p>
    <div className="footer-legal">
      <a href="#privacy">Privacy Policy</a>
      <a href="#terms">Terms of Service</a>
    </div>
  </div>
  </footer>
    )
}

export default Footer;
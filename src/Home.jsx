import "./App.css"; 
import Header from "./Header";
import Footer from "./Footer";
function Home() {
  return (
    <>
     <Header/>
     
      <div className="hero">
        <div className="hero-left">
          <div className="eyebrow">
            <div className="eyebrow-line"></div>
            <p className="eyebrow-text">New Autumn Collection 2026</p>
          </div>
          <h1 className="hero-h1">Where Artistry <em>Meets Beauty</em></h1>
          <p className="hero-p">Luxury makeup crafted for the woman who sees beauty as a daily ritual, not a routine. Clean, conscious, and exquisitely formulated.</p>
          <div className="hero-btns">
            <button className="btn-fill">Explore Collection</button>
            <button className="btn-ghost-text">Our Story</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-product">
            <span className="hero-emoji">💄</span>
            <p className="hero-prod-name">Velvet Satin · No. 12</p>
            <p className="hero-prod-price">£ 48</p>
          </div>
        </div>

      </div>
      
      <div className="Essence">
        <h4>The Essence of Maison </h4>
        <h1>Concentrated to Perfection</h1>
        <p>"Maison Lumière: Where conscious artistry meets exquisite formulation. Experience luxury beauty reimagined as a daily ritual, crafted for the modern woman."</p>
      </div>

      <div className="Collection">
        <div className="Collection-title">
          <h1>The Collection</h1>
        </div>
        <div className="product1">
          <h3>Eye Shadow</h3>
          <p>Rs. 4,250</p>
          <button>Add to Cart</button>
        </div>
         <div className="product2">
          <h3>Eye Liner</h3>
          <p>Rs. 4,250</p>
          <button>Add to Cart</button>
        </div>
         <div className="product3">
          <h3>Lip Stick</h3>
          <p>Rs. 4,250</p>
          <button>Add to Cart</button>
        </div>
         <div className="product4">
          <h3>Tati</h3>
          <p>Rs. 4,250</p>
          <button>Add to Cart</button>
        </div>
      </div>

      <div className="Newsletter">
        <div className="side1">
          <h1>Stay Notified of New Masterpieces</h1>
          <p>Join our inner circle for exclusive early access to limited edition Extraits and the stories behind our scent architecture.</p>
        </div>
        <div className="side2">
          <input type="text" placeholder="Enter Email Address" />
          <button>Subscribe</button>
        </div>
      </div>

<Footer/>
    </>
  );
}

export default Home;
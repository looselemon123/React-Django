import "./App.css"; 
import { useState, useEffect } from "react";
function Home({addToCart}) {
  const images = [
    "/Maybelline's Spectacular SuperStay Matte Ink Liquid Lipstick.jpg",
    "/Makeup foundation.jpg",
    "/Loose & Pressed Face Powders.jpg"
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Changes every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);
  return (
    <>
      
      <div className="hero" 
        style={{ backgroundImage: `url("${images[index]}")` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="eyebrow">
            <div className="eyebrow-line"></div>
            <p className="eyebrow-text">New Autumn Collection 2026</p>
          </div>
          <h1 className="hero-h1">Where Artistry <em>Meets Beauty</em></h1>
          <div className="hero-btns">
            <button className="btn-fill">Explore Collection</button>
            <button className="btn-ghost-text">Our Story</button>
          </div>
        </div>
      </div>

        <div className="Services">
        <div className="Services-Header">
          <div className="eyebrow">
            <div className="eyebrow-line"></div>
            <p className="eyebrow-text">Our Expertise</p>
          </div>
          <h1>Our Services</h1>
        </div>

        <div className="Services-Grid">
          <div className="Service-Item">
            <span className="Service-Icon">✦</span>
            <h3>Bespoke Artistry</h3>
            <p>Personalized makeup consultations tailored to your unique bone structure and skin tone.</p>
          </div>

          <div className="Service-Item">
            <span className="Service-Icon">◈</span>
            <h3>Bridal Rituals</h3>
            <p>Exquisite bridal packages designed to make your special day a timeless masterpiece.</p>
          </div>

          <div className="Service-Item">
            <span className="Service-Icon">❈</span>
            <h3>Masterclasses</h3>
            <p>Learn the architecture of beauty from world-class artists in our private studio.</p>
          </div>

          <div className="Service-Item">
            <span className="Service-Icon">⏳</span>
            <h3>Skin Therapy</h3>
            <p>Advanced botanical treatments to prep your canvas for flawless makeup application.</p>
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
        <div className="Collection-Products">
            <div className="Product-Card">
              <img src="/Maybelline's Spectacular SuperStay Matte Ink Liquid Lipstick.jpg" alt="Lipstick" />
              <h3>Heavy Lipstick</h3>
              <p>Rs. 5,000</p>
              <button onClick={addToCart}>Add To Cart</button>
            </div>

            <div className="Product-Card">
              <img src="/Loose & Pressed Face Powders.jpg" alt="Powder" />
              <h3>Face Powder</h3>
              <p>Rs. 5,000</p>
              <button  onClick={addToCart}>Add To Cart</button>
            </div>

            <div className="Product-Card">
              <img src="/Makeup foundation.jpg" alt="Eye Shadow" />
              <h3>Eye Shadow</h3>
              <p>Rs. 5,000</p>
              <button  onClick={addToCart}>Add To Cart</button>
            </div>
            
            <div className="Product-Card">
              <img src="/Makeup foundation.jpg" alt="Eye Shadow" />
              <h3>Eye Shadow</h3>
              <p>Rs. 5,000</p>
              <button  onClick={addToCart}>Add To Cart</button>
            </div>
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
    </>
  );
}

export default Home;
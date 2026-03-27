import "./Shop.css"; 
import Header from "./Header";
import Footer from "./Footer";

function Shop() {
  return (
    <>
      <Header/>
      <div className="Hero">
        <h1>The Collection</h1>
        <p>Feel The Essence</p>
    

        <div className="Collection">
          <div className="Collection-title">
            <div className="Hero-inputs">
        <input type="text" placeholder="Search Any Product"/>
        <select name="categories" id="categories">
              <option value="all">All Categories</option>
              <option value="face">Face</option>
              <option value="eyes">Eyes</option>
              <option value="lips">Lips</option>
              <option value="skincare">Skincare</option>
        </select>
      </div>
          </div>
          <div className="Products">
            <div className="Product-Card">
              <img src="/Maybelline's Spectacular SuperStay Matte Ink Liquid Lipstick.jpg" alt="Lipstick" />
              <h3>Heavy Lipstick</h3>
              <p>Rs. 5,000</p>
              <button>Add To Cart</button>
            </div>

            <div className="Product-Card">
              <img src="/Loose & Pressed Face Powders.jpg" alt="Powder" />
              <h3>Face Powder</h3>
              <p>Rs. 5,000</p>
              <button>Add To Cart</button>
            </div>

            <div className="Product-Card">
              <img src="/Makeup foundation.jpg" alt="Eye Shadow" />
              <h3>Eye Shadow</h3>
              <p>Rs. 5,000</p>
              <button>Add To Cart</button>
            </div>
            
            <div className="Product-Card">
              <img src="/Makeup foundation.jpg" alt="Eye Shadow" />
              <h3>Eye Shadow</h3>
              <p>Rs. 5,000</p>
              <button>Add To Cart</button>
            </div>

            <div className="Product-Card">
              <img src="/Maybelline's Spectacular SuperStay Matte Ink Liquid Lipstick.jpg" alt="Lipstick" />
              <h3>Heavy Lipstick</h3>
              <p>Rs. 5,000</p>
              <button>Add To Cart</button>
            </div>

            <div className="Product-Card">
              <img src="/Loose & Pressed Face Powders.jpg" alt="Powder" />
              <h3>Face Powder</h3>
              <p>Rs. 5,000</p>
              <button>Add To Cart</button>
            </div>

            <div className="Product-Card">
              <img src="/Makeup foundation.jpg" alt="Eye Shadow" />
              <h3>Eye Shadow</h3>
              <p>Rs. 5,000</p>
              <button>Add To Cart</button>
            </div>

            <div className="Product-Card">
              <img src="/Makeup foundation.jpg" alt="Eye Shadow" />
              <h3>Eye Shadow</h3>
              <p>Rs. 5,000</p>
              <button>Add To Cart</button>
            </div>

            <div className="Product-Card">
              <img src="/Maybelline's Spectacular SuperStay Matte Ink Liquid Lipstick.jpg" alt="Lipstick" />
              <h3>Heavy Lipstick</h3>
              <p>Rs. 5,000</p>
              <button>Add To Cart</button>
            </div>

            <div className="Product-Card">
              <img src="/Loose & Pressed Face Powders.jpg" alt="Powder" />
              <h3>Face Powder</h3>
              <p>Rs. 5,000</p>
              <button>Add To Cart</button>
            </div>

            <div className="Product-Card">
              <img src="/Makeup foundation.jpg" alt="Eye Shadow" />
              <h3>Eye Shadow</h3>
              <p>Rs. 5,000</p>
              <button>Add To Cart</button>
            </div>

            <div className="Product-Card">
              <img src="/Makeup foundation.jpg" alt="Eye Shadow" />
              <h3>Eye Shadow</h3>
              <p>Rs. 5,000</p>
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
    
  );
}

export default Shop;
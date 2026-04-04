import { useState } from "react";
import "./Shop.css";

function Shop({ addToCart }) {
  // 1. DATA: List all your products here once
  const allProducts = [
    { id: 1, name: "Heavy Lipstick", price: "Rs. 5,000", img: "/Maybelline's Spectacular SuperStay Matte Ink Liquid Lipstick.jpg" },
    { id: 2, name: "Face Powder", price: "Rs. 5,000", img: "/Loose & Pressed Face Powders.jpg" },
    { id: 3, name: "Foundation", price: "Rs. 5,000", img: "/Makeup foundation.jpg" },
    { id: 4, name: "Blush", price: "Rs. 5000", img: "/SHEGLAM Color Bloom Liquid Blush Makeup for Cheeks Matte Finish - Devoted.jpg"},
    { id: 5, name: "Heavy Lipstick", price: "Rs. 5,000", img: "/Maybelline's Spectacular SuperStay Matte Ink Liquid Lipstick.jpg" },
    { id: 6, name: "Face Powder", price: "Rs. 5,000", img: "/Loose & Pressed Face Powders.jpg" },
    { id: 7, name: "Foundation", price: "Rs. 5,000", img: "/Makeup foundation.jpg" },
    { id: 8, name: "Blush", price: "Rs. 5000", img: "/SHEGLAM Color Bloom Liquid Blush Makeup for Cheeks Matte Finish - Devoted.jpg"},
    { id: 9, name: "Heavy Lipstick", price: "Rs. 5,000", img: "/Maybelline's Spectacular SuperStay Matte Ink Liquid Lipstick.jpg" },
    { id: 10, name: "Face Powder", price: "Rs. 5,000", img: "/Loose & Pressed Face Powders.jpg" },
    { id: 11, name: "Foundation", price: "Rs. 5,000", img: "/Makeup foundation.jpg" },
    { id: 12, name: "Blush", price: "Rs. 5000", img: "/SHEGLAM Color Bloom Liquid Blush Makeup for Cheeks Matte Finish - Devoted.jpg"},
    { id: 13, name: "Heavy Lipstick", price: "Rs. 5,000", img: "/Maybelline's Spectacular SuperStay Matte Ink Liquid Lipstick.jpg" },
    { id: 14, name: "Face Powder", price: "Rs. 5,000", img: "/Loose & Pressed Face Powders.jpg" },
    { id: 15, name: "Foundation", price: "Rs. 5,000", img: "/Makeup foundation.jpg" },
    { id: 16, name: "Blush", price: "Rs. 5000", img: "/SHEGLAM Color Bloom Liquid Blush Makeup for Cheeks Matte Finish - Devoted.jpg"}
    
  ];

  const [searchText, setSearchText] = useState("");

  const displayedProducts = allProducts.filter((item) => {
    return item.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <>
      <div className="Hero">
        <img src="/ChatGPT.jpg" alt="Banner" className="Hero-banner-img" />
        <div className="Hero-content">
          <h1>The Collection</h1>
          <p>Feel The Essence</p>
        </div>
      </div>

      <div className="Hero-inputs">
        <input type="text" placeholder="Search Any Product" onChange={(e) => setSearchText(e.target.value)} />
        
        <select name="categories" id="categories">
          <option value="all">All Categories</option>
          <option value="face">Face</option>
          <option value="eyes">Eyes</option>
          <option value="lips">Lips</option>
          <option value="skincare">Skincare</option>
        </select>
      </div>

      <div className="Products">
        {displayedProducts.map((item) => (
          <div className="Product-Card" key={item.id}>
            <img src={item.img} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button onClick={addToCart}>Add To Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Shop;
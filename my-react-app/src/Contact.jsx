import Footer from "./Footer";
import Header from "./Header";
import './Contact.css'

function Contact() {
    return(
    <>
        <Header/>  
        <div className="Contact">
            <div className="Contact-title">
                <h1>For Any Query Contact Us</h1>    
            </div>
            <div>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <input type="text" placeholder="Enter Message" />
                <button type="submit">Submit</button>
            </div>    
        </div>  
        <Footer/>
    </>
    
    )
}
export default Contact;
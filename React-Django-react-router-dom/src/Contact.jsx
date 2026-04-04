import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      {/* SECTION 1: THE INQUIRY */}
      <section className="contact-hero">
        <div className="contact-wrapper">
          <div className="contact-info">
            <p className="eyebrow-text">Customer Care</p>
            <h1>The <em>Concierge</em></h1>
            <p className="contact-description">
              Our advisors are available to provide personalized styling advice or assist with your recent orders. 
              Please allow 24 hours for a response from our London studio.
            </p>
            <div className="contact-details">
              <div className="detail-item">
                <span>Direct Correspondence</span>
                <p>concierge@maisonlumiere.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="form-group-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="How may we assist you?" rows="6"></textarea>
            <button type="submit" className="btn-fill">Send Message</button>
          </div>
        </div>
      </section>

      <section className="contact-locations">
        <div className="location-header">
          <div className="eyebrow-line"></div>
          <h2>Our Flagship Studios</h2>
        </div>
        <div className="location-grid">
          <div className="location-card">
            <h3>London</h3>
            <p>12 Bond Street, Mayfair<br/>United Kingdom</p>
          </div>
          <div className="location-card">
            <h3>RawalPindi</h3>
            <p>MurreeRoad, WarisKhan<br/>Paksitan</p>
          </div>
          <div className="location-card">
            <h3>New York</h3>
            <p>715 Fifth Avenue, Manhattan<br/>United States</p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Contact;
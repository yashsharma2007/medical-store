import { useState } from 'react'
import paytmQr from './assets/paytm-qr.png'
import './App.css'

const services = [
  {
    title: 'Fast Delivery',
    description: 'Quick doorstep delivery for everyday medicines and essentials.',
  },
  {
    title: 'Prescription Support',
    description: 'Upload your prescription and get help placing the right order.',
  },
  {
    title: 'Healthcare Essentials',
    description: 'Find wellness products, vitamins, and daily care items in one place.',
  },
]

const benefits = [
  'Trusted local pharmacy support',
  'Same-day order assistance',
  'Quality products at fair prices',
]

const products = [
  {
    name: 'Paracetamol',
    price: 20,
    image:
      'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400',
    description: 'Gentle relief for fever and body pain.',
  },
  {
    name: 'Cough Syrup',
    price: 80,
    image:
      'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=400',
    description: 'Effective support for cold and cough symptoms.',
  },
  {
    name: 'Vitamin Tablets',
    price: 120,
    image:
      'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400',
    description: 'Daily wellness support for your routine.',
  },
]

const testimonials = [
  {
    quote: 'Reliable service and fast delivery. I always get what I need on time.',
    author: 'Ravi S.',
  },
  {
    quote: 'Easy to order and very helpful with prescriptions. Highly recommended.',
    author: 'Neha P.',
  },
]

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    medicine: '',
    quantity: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [bill, setBill] = useState(null)
  const [paymentMethod, setPaymentMethod] = useState('upi')

  const handleOrder = (name, price) => {
    const quantity = window.prompt(`Enter quantity for ${name}`)

    if (!quantity) return

    const qty = Number(quantity)

    if (Number.isNaN(qty) || qty <= 0) {
      window.alert('Please enter a valid quantity.')
      return
    }

    const subtotal = qty * price
    const serviceCharge = Math.max(5, Math.round(subtotal * 0.02))
    const total = subtotal + serviceCharge

    setBill({
      name,
      price,
      qty,
      subtotal,
      serviceCharge,
      total,
    })
    setPaymentMethod('upi')
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.name || !formData.phone || !formData.medicine || !formData.quantity) {
      window.alert('Please fill in your name, phone, medicine, and quantity.')
      return
    }

    const message = `Hello Deepak Medical Store, I need ${formData.quantity} ${formData.medicine}. My name is ${formData.name}. Phone: ${formData.phone}. Notes: ${formData.notes || 'No additional notes'}`
    window.open(`https://wa.me/919350393521?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <div className="site-shell">
      <nav className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon" aria-hidden="true">
            ✚
          </span>
          <span>Deepak Medical Store</span>
        </a>

        <input className="menu-toggle" type="checkbox" id="menu-toggle" />
        <label className="menu-button" htmlFor="menu-toggle">
          ☰
        </label>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#billing">Billing</a>
          <a href="#products">Medicines</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="pill">Trusted local pharmacy</span>
            <h1>Your trusted medical store in Ghaziabad.</h1>
            <p>
              Fast medicine delivery, prescription support, and daily healthcare essentials
              brought to your doorstep with care.
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="https://wa.me/919350393521"
                target="_blank"
                rel="noreferrer"
              >
                Order on WhatsApp
              </a>
              <a className="btn btn-secondary" href="#products">
                Browse medicines
              </a>
            </div>

            <ul className="hero-highlights">
              <li>24/7 support assistance</li>
              <li>Prescription guidance</li>
              <li>Doorstep delivery</li>
            </ul>
          </div>

          <div className="hero-card">
            <div className="hero-card-badge">Trusted by local families</div>
            <h3>Why choose us</h3>
            <ul>
              {benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <span className="pill">About us</span>
            <h2>Reliable care for your everyday health needs</h2>
            <p>
              We focus on helping families get trusted medicines and wellness products with
              simple ordering and dependable support.
            </p>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <span className="pill">Services</span>
            <h2>Everything you need in one place</h2>
          </div>

          <div className="card-container">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>

          <div className="card prescription-card">
            <h3>Upload prescription</h3>
            <p>Send your prescription and we will help you place your order quickly.</p>
            <input type="file" accept="image/*,.pdf" />
            <a
              className="btn btn-primary btn-small"
              href="https://wa.me/919350393521"
              target="_blank"
              rel="noreferrer"
            >
              Send on WhatsApp
            </a>
          </div>
        </section>

        <section className="section" id="products">
          <div className="section-heading">
            <span className="pill">Popular medicines</span>
            <h2>Browse our most requested items</h2>
          </div>

          <div className="card-container">
            {products.map((product) => (
              <article className="card product-card" key={product.name}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-meta">
                  <strong>₹{product.price}</strong>
                  <button className="btn btn-secondary" onClick={() => handleOrder(product.name, product.price)}>
                    Order now
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="billing">
          <div className="section-heading">
            <span className="pill">Billing & payment</span>
            <h2>Clear bills, simple payments, and QR support</h2>
            <p>Choose the medicine, add the quantity, and get a ready bill with fast payment options.</p>
          </div>

          <div className="delivery-banner">
            <div>
              <h3>Fast delivery & trusted support</h3>
              <p>Free delivery on orders above ₹500, same-day assistance, and prescription guidance.</p>
            </div>
            <div className="delivery-badges">
              <span>⚡ 30–45 mins</span>
              <span>📦 Free delivery above ₹500</span>
              <span>🩺 Prescription help</span>
            </div>
          </div>

          <div className="billing-card">
            {!bill ? (
              <div className="billing-empty">
                <h3>No bill yet</h3>
                <p>Select a medicine above to create a bill and choose a payment method.</p>
              </div>
            ) : (
              <>
                <div className="billing-summary">
                  <div>
                    <span className="pill">Current bill</span>
                    <h3>{bill.name}</h3>
                    <p>Instant bill summary for your order.</p>
                  </div>
                  <div className="bill-list">
                    <div className="bill-row">
                      <span>Price per unit</span>
                      <strong>₹{bill.price}</strong>
                    </div>
                    <div className="bill-row">
                      <span>Quantity</span>
                      <strong>{bill.qty}</strong>
                    </div>
                    <div className="bill-row">
                      <span>Subtotal</span>
                      <strong>₹{bill.subtotal}</strong>
                    </div>
                    <div className="bill-row">
                      <span>Service charge</span>
                      <strong>₹{bill.serviceCharge}</strong>
                    </div>
                    <div className="bill-row total-row">
                      <span>Total</span>
                      <strong>₹{bill.total}</strong>
                    </div>
                  </div>
                </div>

                <div className="payment-section">
                  <div className="payment-options">
                    <button
                      type="button"
                      className={`payment-chip ${paymentMethod === 'upi' ? 'active' : ''}`}
                      onClick={() => setPaymentMethod('upi')}
                    >
                      UPI QR
                    </button>
                    <button
                      type="button"
                      className={`payment-chip ${paymentMethod === 'cod' ? 'active' : ''}`}
                      onClick={() => setPaymentMethod('cod')}
                    >
                      Cash on delivery
                    </button>
                    <button
                      type="button"
                      className={`payment-chip ${paymentMethod === 'card' ? 'active' : ''}`}
                      onClick={() => setPaymentMethod('card')}
                    >
                      Card payment
                    </button>
                  </div>

                  <div className="qr-card" aria-label="Payment QR code preview">
                    <div className="qr-label">Scan to pay</div>
                    <img src={paytmQr} alt="Paytm QR code" className="qr-image" />
                  </div>

                  <p className="payment-note">
                    {paymentMethod === 'upi' && `Scan the QR with any UPI app to pay ₹${bill.total} instantly.`}
                    {paymentMethod === 'cod' && `Pay ₹${bill.total} at delivery for a convenient cash-on-delivery order.`}
                    {paymentMethod === 'card' && `Use your debit or credit card after we confirm your order on WhatsApp.`}
                  </p>

                  <a
                    className="btn btn-primary"
                    href={`https://wa.me/919350393521?text=${encodeURIComponent(`Hello Deepak Medical Store, I want to order ${bill.qty} ${bill.name}. Total bill: ₹${bill.total}. Payment method: ${paymentMethod}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Confirm on WhatsApp
                  </a>
                </div>
              </>
            )}
          </div>
        </section>

        <section className="section" id="testimonials">
          <div className="section-heading">
            <span className="pill">Testimonials</span>
            <h2>What our customers say</h2>
          </div>

          <div className="card-container">
            {testimonials.map((item) => (
              <article className="card testimonial-card" key={item.author}>
                <p>“{item.quote}”</p>
                <strong>{item.author}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <div>
              <span className="pill">Contact us</span>
              <h2>Need help placing an order?</h2>
              <p>Call or message us for medicine availability and delivery support.</p>
            </div>
            <div className="contact-details">
              <p>📞 +91 9350393521</p>
              <p>📍 Ghaziabad, Uttar Pradesh</p>
              <p>🕒 Open for medicine assistance and delivery requests</p>
              <a className="btn btn-primary" href="https://wa.me/919350393521" target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-card order-form-card">
            <div>
              <span className="pill">Quick order form</span>
              <h2>Tell us what you need</h2>
              <p>Share your medicine name and quantity and we will help you proceed.</p>
            </div>
            <form className="order-form" onSubmit={handleSubmit}>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" required />
              <input type="text" name="medicine" value={formData.medicine} onChange={handleChange} placeholder="Medicine name" required />
              <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" min="1" required />
              <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Any extra details" rows="4"></textarea>
              <button className="btn btn-primary" type="submit">
                Submit request
              </button>
              {submitted && <p className="form-success">Thanks! Your request has been prepared for WhatsApp.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Deepak Medical Store. Trusted care for your daily health needs.</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#billing">Billing</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default App
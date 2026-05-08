function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>Deepak Medical Store</h2>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Medicines</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <h1>Your Trusted Medical Store</h1>

          <p>
            Fast medicine delivery and healthcare products at your doorstep.
          </p>

          <a
  href="https://wa.me/919350393521"
  target="_blank"
>
<button>Order Now</button>
</a>
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>

        <div className="card-container">
          <div className="card">
            <h3>Medicine Delivery</h3>
            <p>Fast home delivery service.</p>
          </div>

  <div
  className="card"
  onClick={() => {
    const name = prompt("Enter Your Name");
    const phone = prompt("Enter Your Phone Number");

    if (name && phone) {
      alert(
        "Thank you " +
          name +
          "! Prescription upload feature will be added soon."
      );
    }
  }}
>
  <h3>Prescription Support</h3>
  <p>Upload and order medicines easily.</p>
</div>

          <div className="card">
            <h3>Healthcare Products</h3>
            <p>All healthcare essentials available.</p>
          </div>
        </div>
      </section>

      <section className="products">
        <h2>Popular Medicines</h2>

        <div className="card-container">

          <div className="card">
            <img
  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400"
  alt="medicine"
/>

            <h3>Paracetamol</h3>
            <p>Fever and pain relief medicine.</p>
            <button>Order Now</button>
          </div>

          <div className="card">
            <img
  src="https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=400"
  alt="medicine"
/>

            <h3>Cough Syrup</h3>
            <p>Effective cough and cold relief.</p>
            <button>Order Now</button>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400"
              alt="medicine"
            />

            <h3>Vitamin Tablets</h3>
            <p>Daily health supplements.</p>
            <button>Order Now</button>
          </div>

        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>

        <p>Phone: +91 9350393521</p>
        <p>Location: Ghaziabad</p>
      </section>
    </div>
  )
}

export default App
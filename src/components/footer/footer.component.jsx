// src/components/footer/footer.component.jsx
const Footer = () => {
  return (
    <footer className="container mt-5 pt-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <h2  style={{"font-weight": "bold"}} className="mb-3">About Us</h2>
          <h5>About Vogue-Vista</h5>
          <h5>News</h5>
          <h5>Help</h5>
        </div>
        <div className="col-md-4 mb-4">
          <h2  style={{"font-weight": "bold"}} className="mb-3">Services</h2>
          <h5>Shop</h5>
          <h5>Services Login</h5>
          <h5>Service Checkout</h5>
        </div>
        <div className="col-md-4 mb-4">
          <h2 style={{"font-weight": "bold"}} className="mb-3">Contact Info</h2>
          <h5>Address: 1234 Dr, Vogue-Vista building</h5>
          <h5>Phone: 0123456789</h5>
          <h5>Email: vogue_vista@example.com</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

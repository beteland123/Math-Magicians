import { React } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <h1>Math Magicians</h1>

    <div className="navDiv">
      <Link to="/">Home</Link>
      <Link to="/Calculator">Calculator</Link>
      <Link to="/Quote">Quote</Link>
    </div>
  </nav>
);
export default Navbar;

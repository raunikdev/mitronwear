import { Link } from "react-router-dom";
import "./css/Header.css";
// import { Link, Navigate, useNavigate } from 'react-router-dom';

const Header = () => {
  // const navigate = useNavigate();
  // const handleRoute = () => {
  //   navigate(`/about`);
  // }
  return (
    <header>
      <h2>
        <a href="/">Mitronwear</a>
      </h2>
      <ul className="head-ul">
        <li className="head-li">
          <a href="/#home">Home</a>
        </li>
        <li className="head-li">
          <a href="/catalogue">Catalogue</a>
        </li>
        {/* <li className="head-li"><a href="/contact">Contact</a></li> */}
        <li className="head-li">
          <Link to="/about">About</Link>
        </li>
        {/* <li className="head-li"><a href="/about">About</a></li> */}
        {/* <Link to="/about">go to about page using Link tag</Link>
                  <p onClick={handleRoute}> go to about page using useNavigate</p>
        <Navigate to="/about"> using navigate tag from router dom</Navigate> */}
      </ul>
    </header>
  );
};

export default Header;

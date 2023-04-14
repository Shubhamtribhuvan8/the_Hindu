import { Link } from "react-router-dom";
import Login from "./TheHindu/Login";
import "./Home.css"
function Nav(props) {
  var divStyle = {
    // padding: "20px",
  backgroundColor: "white",
   position: "fixed",
  width: "100%",
  top: "0",
  zIndex:"1",
  };
  var aStyle = {
    color: "black",
     marginRight: "60px",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "900",
    fontFamily: "Merriweather,arial",
    paddingLeft: "0",
    paddingRight: "0",
    marginRight: "19px",
    borderTop:"5px solid #000",
    width: "147px",
    position: "relative",
    paddingTop: "2px",
  };
  return (
    <div style={divStyle}>
      <Link style={aStyle} to="/">
        India
      </Link>
      <Link style={aStyle} to="/world">
        World
      </Link>
      <Link style={aStyle} to="/opinion">
        Opinion
      </Link>
      <Link style={aStyle} to="/Entertainment">
       Entertainment
      </Link>
      <Link style={aStyle} to="/Todays">
       Today's Paper
      </Link>
      <Link style={aStyle} to="/Menu">
       Menu
      </Link>
      <Link style={aStyle} to="/login1">
      <Login/>
      </Link>
    </div>
  );
}

export default Nav;

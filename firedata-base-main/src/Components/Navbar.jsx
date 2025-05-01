import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{backgroundColor: "black", color: "white", width: "100%", display: "flex", justifyContent: "center", padding: "20px"}}>
      <ul style={{listStyle: "none", display: "flex", gap: "20px", margin: 0, padding: 0}}>
        <li style={{display: "inline-block"}}>
          <Link to="/" style={{textDecoration: "none", color: "white", fontSize: "16px", padding: "10px 15px"}}>Home</Link>
        </li>
        <li style={{display: "inline-block"}}>
          <Link to="/product" style={{textDecoration: "none", color: "white", fontSize: "16px", padding: "10px 15px"}}>Product</Link>
        </li>
        <li style={{display: "inline-block"}}>
          <Link to="/addproduct" style={{textDecoration: "none", color: "white", fontSize: "16px", padding: "10px 15px"}}>Add Product</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar

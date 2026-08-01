import React from 'react'
import { Link, NavLink } from 'react-router'
import './navbar.css'

const Navbar = () => {
    return (
        <nav style={{
            padding: "10px", display: "flex"
            , justifyContent: "center",
            borderBottom: "2px solid black", marginBottom: "20px"

        }}>
            <ul style={{
                display: 'flex', listStyle: "none",
                gap: "20px",
            }}>
                <li>
                    <NavLink to={'/'}
                        className={({ isActive }) => isActive ? "active" : ""}
                    >all products
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? "active" : ""}
                        to={'/search-product'}>Search Product
                    </NavLink>
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar
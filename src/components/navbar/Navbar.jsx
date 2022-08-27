import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux';

import './navbar.css';


export default function Navbar() {

    const getdata = useSelector((state)=>state.addItems.carts)
    console.log(getdata);

    // let x = 

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm fixed-top nav2">
                <div className="container">
                    <Link className="navbar-brand fw-bold fs-4 border-0" to="/">
                    SHOP LOGO
                        </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="products">Products</Link>
                            </li>
                            
                            
                            
                        </ul>
                        <div className="buttons">
                            
                            <Link to="cart" className='btn btn-outline-dark ms-2'>
                                <i className='fa fa-shopping-cart me-1'></i> 
                                Cart {getdata.length}
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}


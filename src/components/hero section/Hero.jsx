import React from 'react'
import './hero.css';

export default function Hero() {
    return (
        <div>
            <div className='hero '>
                <div className="card bg-dark text-white border-0 ">
                    <img src="/assests/bg.jpg" className="card-img" alt="Background" height='550px' />
                    <div className="card-img-overlay d-flex  justify-content-center  align-items-center">
                        <div className="container">

                            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

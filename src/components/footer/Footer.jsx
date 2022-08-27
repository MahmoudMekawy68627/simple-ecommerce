import React from 'react'
import { Link } from 'react-router-dom'

import './footer.css';


export default function Footer() {
  return (
    <div>
      <div className='footer '>
        <footer className="bg-dark text-center text-white  ">
          <div className="container p-2">
            <section className="mb-2">
              <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
              ><i className="fa fa-facebook-official"></i
              ></Link>

              <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
              ><i className="fa fa-twitter"></i
              ></Link>

              <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
              ><i className="fa fa-google"></i
              ></Link>

              <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
              ><i className="fa fa-instagram"></i
              ></Link>

              <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
              ><i className="fa fa-linkedin"></i
              ></Link>

              <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
              ><i className="fa fa-github"></i
              ></Link>
            </section>
            <p>Mahmoud Mekawy</p>
            <h6 className="text-center p-1" >
              © 2020 Copyright:
            </h6>
          </div>
        </footer>

      </div>
    </div>
  )
}

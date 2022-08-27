import React from 'react'
import { Link } from 'react-router-dom';
import './product.css'
import { useDispatch } from 'react-redux';
import {addItem} from '../../redux/actions/action'

export default function Product(props) {
    const {productInfo} = props ;
    // console.log(productInfo);
    
    const dispatch = useDispatch();

    const send = (e)=>{
        // console.log(e);
        dispatch(addItem(e))
    }


    return (
        <div className='col-md-3 mb-2'>
            <div className="card product h-100 text-center p-4 " >
                <img src={productInfo.image} className="card-img-top" alt={productInfo.title} height="350px" width="100%" />
                <hr />
                <div className="card-body">
                    <h5 className="card-title mb-0">{productInfo.title.substring(0,12)} ...</h5>
                    <p className="card-text lead fw-bold">$ {productInfo.price}</p>
                    <Link to="#" className="btn btn-outline-dark me-1" onClick={()=> send(productInfo)}>Add To Cart</Link>
                    <Link to={`/productDetails/${productInfo.id}`} className="btn btn-outline-dark">Details</Link>
                </div>
            </div>
        </div>
    )
}

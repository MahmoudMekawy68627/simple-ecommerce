import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../../redux/actions/action'
import {useSelector} from 'react-redux';


import axios from 'axios'

import { useParams } from "react-router-dom";

export default function ProductDetails() {
    const [product, setProduct] = useState({})
    let params = useParams();

    async function getProduct() {
        let { data } = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
        console.log(data);
        setProduct(data);
    }

    const getdata = useSelector((state)=>state.addItems.carts)
    console.log(getdata);

    const dispatch = useDispatch();

    const send = (e)=>{
        // console.log(e);
        dispatch(addItem(e))
    }


    useEffect(() => {

        getProduct()


    }, [])


    return (
        <div className='container '>
            <div className="row ">

                <div className='row  py-5'>

                    <div className="col-md-6  ">
                        <img src={product.image} alt="" height='100%' width='500px' />
                    </div>
                    <div className="col-md-6">
                        <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                        <h1 className='display-5'>{product.title}</h1>
                        <p className='lead fw-bolder'>
                            Rating {product.rating && product.rating.rate}
                            <i className='fa fa-star ms-2'></i>
                        </p>
                        <h3 className='display-6 fw-bold my-4'> $ {product.price} </h3>
                        <p className='lead'>{product.description}</p>
                        <div className='Buttons my-5'>

                            <Link to='#' className='btn btn-outline-dark me-2 px-4' onClick={()=>send(product)}>Add To Cart</Link>
                            <Link to='/cart' className='btn btn-dark px-4'>Go To Cart</Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

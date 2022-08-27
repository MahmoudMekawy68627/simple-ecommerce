import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../../components/product/Product';
import { connect } from 'react-redux';


export default function Products() {
    
    const [products, setProducts] = useState([])

    const [filter, setFilter] = useState()
    // const [loading, setLoading] = useState(false)
    // let componentMounted = true;

    async function getProducts() {
        let { data } = await axios.get('https://fakestoreapi.com/products');
        let myProducts = data;
        setProducts(myProducts)
        setFilter(myProducts)
        // setLoading(true)
        console.log(myProducts);
        // console.log(products);

    }

    useEffect(() => {
        getProducts()


    }, [])

    const filterProduct = (cat) => {
        if (cat === "all") {
            setProducts(filter);
            // console.log(x);

        } else {
            const updatedList = filter.filter((x) => x.category === cat);
            setProducts(updatedList);
            console.log(updatedList);
        }

    }

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'> Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center mb-3'>
                    <div className="col-md-auto">
                        <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                            <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("all")}>ALL</button>
                            <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                            <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                            <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")}>Jewelery</button>
                            <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")}>Electronic</button>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {
                        products.length > 0 ?
                            products.map((product, index) => <Product key={index} productInfo={product} />)
                            : <h2 className='text-center'>Loading ...</h2>
                    }
                </div>

            </div>
        </div>
    )
}

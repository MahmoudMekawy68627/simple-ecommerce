import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/actions/action'


export default function Cart() {

    const [price, setPrice] = useState(0)

    const getdata = useSelector((state) => state.addItems.carts)
    const getQnty = useSelector((state) => state.addItems.qnty)

    console.log(getQnty);

    const dispatch = useDispatch()

    const deleteI = (id) => {
        dispatch(deleteItem(id))

    }

    let total =()=>{
        let price = 0 ;
        getdata.map((ele,k)=>{
            price += ele.price
        })
        setPrice(price);
    };
    useEffect(() => {
      total();
    
      
    }, [total])
    

    return (
        <div>
            <div className="container">
                {
                    getdata.length > 0 ?

                        getdata.map((i, index) => <div className='my-5' key={index}>
                            <div className="row" >
                                <div className='col-md-4'>
                                    <img src={i.image} alt="" height="200px" width="180px" />
                                </div>
                                <div className="col-md-4">
                                    <h3>{i.title}</h3>
                                    <p className='lead fw-bold'> {i.price} $  </p>

                                    {/* <button className='btn btn-outline-dark me-4'>
                                        <i className='fa fa-minus'></i>
                                    </button>
                                    <span>0</span>
                                    <button className='btn btn-outline-dark '>
                                        <i className='fa fa-plus'></i>
                                    </button> */}
                                    <div className='mt-2 d-flex  algin-items-center  w-100' >
                                        <button className='fs-4 border-0'>-</button>
                                        <span className='fs-4 ms-4'>0</span>
                                        <button className='fs-4 ms-4 border-0'>+</button>
                                    </div>

                                    <div className=''>
                                        <button className='btn btn-outline-dark mt-3 ms-4'>
                                            <i className='fa fa-trash largetrash' onClick={()=>deleteI(i.id)} ></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>)

                        : <h2 className='text-center my-5'>No Item </h2>
                }
                

            </div>
            <div className='text-center my-5'>

            {getdata.length > 0 ? <h3>TOTAL PRICE : {price} $</h3> : ''}
            </div>
        </div>
    )
}

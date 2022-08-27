
const addItem = {
    carts: [],
    qnty: 0
}
const addItems = (state = addItem, action) => {

    switch (action.type) {
        case "ADDITEM":

                return {
                    ...state,
                    carts: [...state.carts, action.payload]
                }
            
            break;

        case "DELETEITEM":
            const data = state.carts.filter((el) => el.id !== action.payload)
            return {
                ...state,
                carts: data
            }

            break;

        default:
            return state;
            break;
    }
}

export default addItems;












/*
import * as actionTypes from '../actions/types'

const INITIAL_STATE ={
    product : [], // {id , title ,...}
    cart : [],
    currentItem : null ,
}

const handleCart = (state = INITIAL_STATE , action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            return{}
        case actionTypes.REMOVE_FROM_CART:
            return{}
        case actionTypes.ADJUST_QTY:
            return{}
        case actionTypes.LOAD_CURRENT_ITEM:
            return{}
        default:
            return state ;
    

    }
}
export default handleCart ;
*/

/*
const cart = [];

const handleCart = (state = cart , action )=>{
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            // check if product is already exist 
            const exist = state.find((x)=>x.id === product.id);
            if (exist){
                //Increase The Quantity
                return state.map((x)=>
                x.id === product.id ? {...x , qty: x.qty +1 } :x
                );
            }else {
                const product = action.payload ;
                return[
                    ...state,
                    {
                        ...product ,
                        qty :1 ,
                    }
                ]
            }
            break;
        case "DELETEITEM":
            const exist1 = state.find((x)=> x.id === product.id);
            if (exist1.qty ===1){
                return state.filter((x)=> x.id !== exist1.id);
            }else {
                return state.map((x)=>
                    x.id === product.id ? {...x , qty: x.qty -1 } :x
                );
            }

            break;
    
        default:
            return state;
            break;
    }
}

export default handleCart ;
*/
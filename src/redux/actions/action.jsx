// import * as actionTypes from './types'


// export const addToCart = (itemID) => {
//     return {
//         type: actionTypes.ADD_TO_CART,
//         payload: {
//             id: itemID
//         }
//     }
// }
// export const deleteFromCart = (itemID) => {
//     return {
//         type: actionTypes.REMOVE_FROM_CART ,
//         payload: {
//             id: itemID
//         }
//     }
// }
// export const adjustQty = (itemID , value) => {
//     return {
//         type: actionTypes.ADJUST_QTY ,
//         payload: {
//             id: itemID ,
//             qty : value
//         }
//     }
// }
// export const loadCurrentItem = (item) => {
//     return {
//         type: actionTypes.LOAD_CURRENT_ITEM ,
//         payload: {
//             id: item ,
            
//         }
//     }
// }


//For Add Item To Cart
export const addItem = (product)=>{
    return{
        type : "ADDITEM",
        payload : product
    }
}
//For Delete Item To Cart
export const deleteItem = (product)=>{
    return{
        type : "DELETEITEM",
        payload : product
    }
}
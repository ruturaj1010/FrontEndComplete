import axios from 'axios';
import { getProducts } from '../store/reducer/ProductReducer';

const getAsyncProduct = () => async (dispatch , getState ) => {
    try {
        const response = await axios.get( "https://fakestoreapi.com/products" )
        console.log( response.data );
        dispatch(getProducts(response.data))     
    } catch ( error ) {
        console.log( error );
    }
}

export default getAsyncProduct
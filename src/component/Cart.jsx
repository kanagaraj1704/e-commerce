import React from 'react';
import { useSelector} from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import {delCart } from '../redux/action';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const state =useSelector((state)=> state.handleCart);
  console.log(123,state);
  // const dispatch =useDispatch;  

  // const handleAdd =(item) =>{
  //   dispatch(addCart(item));
  // };
  // const handleDel =(item) =>{
  //   dispatch(delCart(item));
  // };

  const emptyCart = () =>{
    return(
    <div className="px-4 bg-light rounded-3 py-5">
      <div className="container py-4">
        <div className="row">
          <h3>Your cart is Empty</h3>
        </div>
      </div>
    </div>
    );
  };
  const cartItems = (cartItem) => {
    console.log(cartItems);
    return(
        <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                    </div>
                    <div className="col-md-4">
                        <h3>{cartItem.title}</h3>
                        <p className="lead fw-bold">${cartItem.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
const button = () => {
  return(
      <div className="container">
          <div className="row">
              <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
          </div>

      </div>
  );
}

  return(
     <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
      </>
  )
  
}

export default Cart;


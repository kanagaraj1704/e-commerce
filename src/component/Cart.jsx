import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addCart,delCart } from '../redux/action';

const Cart = () => {
  const state =useSelector((state)=>state.hadleCart);
  const dispatch =useDispatch;

  const handleAdd =(item) =>{
    dispatch(addCart(item));
  };
  const handleDel =(item) =>{
    dispatch(delCart(item));
  };

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
  const cartItems =(product) => {
    return(
      <>
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        
      </div>
      </>
    )
  }
  
  
}

export default Cart;


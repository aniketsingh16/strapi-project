/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';
import getStripe from '../../lib/getStripe';

import { useStateContext } from '../../context/StateContext';
import { getBaseUrl } from '../../static';
import OrderForm from './OrderForm';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();
  const [ showOrderForm, setShowOrderForm ] = useState(false);
  
  // TODO : 
  const [ orderId, setOrderId ] = useState(null);



  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems)
    });
    if(response.statusCode === 500) return;

    const data = await response.json();
    // console.log("Dataaaaaaaaa",data);
    toast.loading('Redirecting...');
    
    stripe.redirectToCheckout({ sessionId: data.id });
  }

  const orderItems = cartItems.map(( item ) => {
    const { _id, name, sellingPrice, quantity } = item
    return {
      productId : Number(_id),
      productName : name,
      sellingPrice,
      quantity
    }
  })

  const handleClick = (e) => {
    //show order form
    setShowOrderForm(true)
  }

  return (
    <div className='cart-wrapper' ref={cartRef}>
      {
        showOrderForm ? <OrderForm
            setOrderId={setOrderId}
            orderId={orderId}
            setShowCart={setShowCart}
            orderItems={orderItems}
            totalPrice={totalPrice}
            setShowOrderForm={setShowOrderForm}
            /> : <div className='cart-container'>
        <button type='button'
          className='cart-heading'
          onClick={() => setShowCart(false)}>
            <AiOutlineLeft />
            <span className='heading'> Your Cart </span>
            <span className='cart-num-items'> ({totalQuantities} items)</span>

        </button>
        { cartItems.length <1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150}/>
            <h3> Your cart is empty! </h3>
            <Link href='/' passHref>
              <button
              type='button'
              onClick={() => setShowCart(false)}
              className='btn'
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <div className='product-container'>
          {cartItems.length >=1 && cartItems.map((item, index)=> (
            <div className='product' key={item._id}>
              <img src={ item.images?.data[0]?.attributes.url } className='cart-product-image' alt='' />
              <div className='item-desc'>
                <div className='flex top'>
                  <h5>{ item.name }</h5>
                  
                  <h4> INR { item.sellingPrice }</h4>
                </div>
                <div className='flex bottom'>
                  <div>
                    <p className='quantity-desc'>
                    <span className='minus' onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
                            <AiOutlineMinus />
                        </span>
                        <span className='num' onClick=''>
                            { item.quantity }
                        </span>
                        <span className='plus' onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
                            <AiOutlinePlus />
                        </span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className={`btn`} 
                onClick={handleClick}                
              >
                Buy Now
              </button>
            </div>
          </div>
        )}

      </div>
      }
      
    </div>
  )
}

export default Cart;



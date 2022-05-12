import React, { useContext } from 'react';
import CartContext from '../CartState/CartContent/CartContext';
import CartItem from './CartItem/CartItem';

const Cart = () => {
const { showCart, cartItems, showHideCart } = useContext(CartContext);
console.log(cartItems.length);
    return (
        <>
      {showCart && (
        <div className='cart__wrapper'>
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className='fa fa-times-circle'
              aria-hidden='true'
              onClick={showHideCart}
            ></i>
          </div>
          <div className='cart__innerWrapper'>
            {cartItems.length === 1 ? (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
                
              </ul>
            ) : (
              <>
              <div class="alert alert-danger" role="alert">
                You Can't add 2 Packages at a time <br />
              </div>
              </>
              
            )}
          </div>
          <div className='Cart__cartTotal'>
            <div style={{  fontSize: '24px' }}>Cart Total</div>
            <div style={{ marginLeft: 5, color: 'red', fontSize: '22px' }}>
              {(
                cartItems.reduce((amount, item) => parseInt(Number(item.price + amount)), 0)
              )}
            </div>
          </div>
        </div>
      )}
    </>
    );
};

export default Cart;
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItme from '../ReviewItem/ReviewItme';
import { removeFromDb,deleteShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';

const Order = () => {
    const saveCart = useLoaderData()
    const [cart, setCart] = useState(saveCart);

    const handleRemoveFromCart = (id) => {
        const remaing = cart.filter(product => product.id !== id);
        setCart(remaing);
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map((product) => <ReviewItme
                        product={product} key={product.id}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItme>)
                }
            </div>
            <div className='cart-container'>
            <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link className='proceed-link' to="/checkout">
                        <button className='btn-proceed'>Proceed Checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;
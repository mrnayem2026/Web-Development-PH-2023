import React from 'react';

const Cart = ({cart}) => {
    let totalPrice = 0;
    let totalShippincCharge = 0;
    
    for(let product in cart)
    {
        totalPrice += cart[product].price
        totalShippincCharge += cart[product].shipping
    }
    let tax = totalPrice*10/100 
    const grandTotal = totalPrice + totalShippincCharge + tax; 

    return (
        <div>
            <h1 className='text-2xl font-bold'>Order Summary</h1>
            <p className='mt-5'>Selected Items: {cart.length}</p>
            <p className='mt-2'>Total Price: ${totalPrice}</p>
            <p className='mt-2'>Total Shipping Charge: ${totalShippincCharge}</p>
            <p className='mt-2'>Tax: ${tax.toFixed(2)}</p>
            <p className='mt-2 text-2xl font-bold'>Grand Total: ${grandTotal}</p>
        </div>
    );
};

export default Cart;
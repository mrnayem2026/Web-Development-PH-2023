import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import Cart from '../Cart/Cart';
import './Shop.css'
import { addToDb, getShoppingCart } from '../../assets/utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('../../../public/fakeData/products.json');
            const data = await res.json();
            setProducts(data);
        }
        fetchData();
    }, [])

    useEffect(()=>{
        const storeCart = getShoppingCart();
        const saveCart = [];
        for(const id in storeCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct)
            {
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
    },[products])

    const handleCard = (product) => {
        addToDb(product.id)
        let selectProduct = [...cart , product]
        setCart(selectProduct);
    }

    return (
        <>
            <div className='grid  lg:grid-cols-12'>
                <div id='product-container' className='col-span-10  ml-48 grid grid-cols-3 gap-6 pt-40'>
                    {
                        products.map((product) => <Product key={product.id} product={product} handleCard={handleCard}></Product>)
                    }
                </div>
                <div className='col-span-2  pt-6 bg-yellow-400 sticky top-0 h-[800px] p-5'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;
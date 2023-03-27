import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        const fetchData =  async()=>{
            const res = await fetch('../../../public/fakeData/products.json');
            const data = await res.json();
            setProducts(data);
        }
        fetchData();
    },[])
    return (
        <>
            <div className='grid  lg:grid-cols-12'>
                <div id='product-container' className='col-span-10  ml-48 grid grid-cols-3 gap-6 pt-40'>
                    {
                        products.map((product)=><Product key={product.id}  product={product}></Product>)
                    }
                </div>
                <div className='col-span-2  pt-6'>
                    <h1 className='text-2xl font-bold'>Order Summary</h1>
                </div>
            </div>
        </>
    );
};

export default Shop;
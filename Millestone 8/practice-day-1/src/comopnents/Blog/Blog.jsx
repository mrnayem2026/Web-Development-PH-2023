import React from 'react';
import Author from '../author/author';
import Footer from '../footer/footer';
import Header from '../header/header';

const Blog = () => {
    return (
        <>
            <div className='bg-gray-400 p-6 '>
                <Header></Header>
                <Author></Author>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Blog;
import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/containers/productList.scss';
import useGetProduct from '../hook/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
    const products = useGetProduct(API) 
	return (

        <div className="ProductList">
            
            {products.map((product) => (
                <ProductItem product={product} key={product.id} />
            ))}
        </div>
	);
}

export default ProductList;
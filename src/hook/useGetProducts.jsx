import { useEffect, useState } from "react";

export default function useGetProduct(API){
    const [products, setProducts] = useState([]);

	useEffect(() => {

        async function searchProducts(){
            const response = await fetch(API);
            const products = await response.json();
            setProducts(products)
        }
        searchProducts()
	}, [])
    return products
}
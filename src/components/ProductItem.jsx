import React, { useState } from 'react';
import '@styles/components/productItem.scss';
//import addToCart from '@icons/bt_add_to_cart.svg';
export default function ProductItem ({ product }){
	const [cart, setCart] = useState([]);

    console.log(product)
	const handleClick = () => {
		setCart([]);
	}

	return (
		<div className="ProductItem">
            <figure className='figureProduct'>
                <img src={product.images[0]} alt={product.title} />
            </figure>
			
			<div className="product-info">
				<div className='column-justifice-helper'>
					<p className='glitch-text-helper' title={"$"+product.price}>${product.price}</p>
					<p className='glitch-font-helper' title={product.title}>{product.title}</p>
				</div>
				{/*<figure onClick={handleClick} >
					<img src={addToCart} alt="" />
				</figure>*/}
			</div>
		</div>
	);
}
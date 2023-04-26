import React, { useState, useContext } from 'react';
import '@styles/components/productItem.scss';
import addToCartIcon from '@icons/addshopping.svg';
import AppContext from '../context/AppContext';
export default function ProductItem ({ product }){
	const {addToCart, state } = useContext(AppContext);

	const handleClick = (item) => {
		addToCart(item)
		console.log(state)
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
				
				<figure onClick={()=>{handleClick(product)}} className="icon-glitch-helper">
					<img className="oneIcon" src={addToCartIcon} />
					<img className="twoIcon" src={addToCartIcon} />
					<img className="threeIcon" src={addToCartIcon} />
				</figure>

			</div>
		</div>
	);
}
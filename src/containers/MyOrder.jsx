import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '../context/AppContext';
import '@styles/containers/myOrder.scss';
import IconArrow from '@icons/arrowStick.svg';

const MyOrder = ({close}) => {
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + (currentValue[0].price * currentValue[1] );
		const sum = state?.cart?.reduce(reducer, 0) || 0;
		return sum;
	}

	return (
		<aside className="MyOrder">
            
            <figure className="icon-glitch-helper closeButton" onClick={close}>
                <img className="oneIcon" src={IconArrow} />
                <img className="twoIcon" src={IconArrow} />
                <img className="threeIcon" src={IconArrow} />
            </figure>
			<div className="title-container">
                
				<p className="title glitch-text-helper" title='Order'>Order</p>
			</div>
			<div className="my-order-content">
				{state?.cart?.map(product => (
					<OrderItem product={product[0]} amount={product[1]} key={`orderItem-${product[0].id}`} />
				))}
			</div>
			
			<div className="order">
				<p>
					<span>Total</span>
				</p>
				<p>${sumTotal()}</p>
			</div>
			<button className="primary-button">
				Checkout
			</button>
		</aside>
	);
}

export default MyOrder;
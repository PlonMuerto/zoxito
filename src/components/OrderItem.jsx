import {useContext} from 'react';
import '@styles/components/orderItem.scss';
import IconClose from '@icons/close.png'
import IconLess from '@icons/less.png'
import IconMore from '@icons/more.png'
import AppContext from '../context/AppContext';

const OrderItem = ({product,amount}) => {

	const {removeFromCart,oneLessCart,oneMoreCart} = useContext(AppContext)

	return (
		<div className="OrderItem">
			<figure className='itemImage'>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<div className=' nameItemOrder'>
				<span className='glitch-text-helper titleItemOrder' title={product.title}>
					{product.title}
				</span>
			</div>
			
			<div className='priceItemOrder'>
				<span className="glitch-text-helper" title={"$"+product.price}>
					${product.price}
				</span>
			</div>
			
			<div className='amountItemOrder'>
				<span className='glitch-text-helper' title={"un:"+amount} >
					un:{amount}
				</span>
			</div>
			{
				amount > 1 
				?
				<figure onClick={()=>{oneLessCart(product,amount)}} className='icon-glitch-helper icon-less'>
					<img className="oneIcon" src={IconLess} />
					<img className="twoIcon" src={IconLess} />
					<img className="threeIcon" src={IconLess} />
				</figure>
				:
				null
			}

			{
				amount < 15
				?
				<figure onClick={()=>{oneMoreCart(product,amount)}} className='icon-glitch-helper icon-more'>
					<img className="oneIcon" src={IconMore} />
					<img className="twoIcon" src={IconMore} />
					<img className="threeIcon" src={IconMore} />
				</figure>
				:
				null
			}

			<figure onClick={()=>{removeFromCart(product,amount)}} className='icon-glitch-helper icon-close'>
				<img className="oneIcon" src={IconClose} />
                <img className="twoIcon" src={IconClose} />
                <img className="threeIcon" src={IconClose} />
			</figure>
		</div>
	);
}

export default OrderItem;
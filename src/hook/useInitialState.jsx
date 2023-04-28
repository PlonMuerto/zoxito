import { useState } from "react";

const initialState = {
	cart: [],
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	function addToCart(payload){
		setState((now)=>{
			if(!now?.cart?.some(e=>e[0].id===payload.id)){
				return{
					...now,
					cart: [...now.cart, [payload,1]]
				}
			}else{
				return {
					...now,
					cart:now.cart.map(e=>{
					if(e[0].id===payload.id){
						return [e[0],e[1] + 1]
					}
					return e
					
				})}
			}

		});
	};

	function removeFromCart(payload,amount){
		
		setState(now=>{
			return{
				...now,
				cart:now.cart.filter(e=>e[0].id!==payload.id)
			}
		})
	}

	function oneMoreCart(payload){
		setState(now=>{
			return{
				...now,
				cart:now.cart.map((e)=>{
					if(e[0].id === payload.id){
						return [e[0],e[1] + 1]
					}
					return e
				})
			}
		})
	}
	function oneLessCart(payload){

		setState(now=>{
			return{
				...now,
				cart:now.cart.map((e)=>{
					if(e[0].id === payload.id){
						
						return[e[0],(e[1] - 1)]
					}
					return e
				})
			}
		})
	}


	return {
		state,
		addToCart,
		removeFromCart,
		oneMoreCart,
		oneLessCart
	}
}

export default useInitialState;
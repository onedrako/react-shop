import React, {useContext} from 'react';
import {AppContext} from "../context/AppContext"
import '../styles/OrderItem.scss';

const OrderItem = ({product}) => {
	const {removeFromCart} = useContext(AppContext)

	const handleRemove = product =>{
		removeFromCart(product)
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt="bike" />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img src="@icons/icon_close.png" alt="close" onClick={ () => handleRemove(product)}  />
		</div>
	);
}

export default OrderItem;

//@ts-ignore
import React from 'react';
import {
	useAddToCart,
	useCart,
	useProducts,
} from '../../services/adapter/purchaseAdapter';

function AddToCartButton(): React.ReactNode {
	const products = useProducts();
	const cart = useCart();
	const addToCartAction = useAddToCart();

	const handleOnClickAddToCart = (
		event: React.ReactHTMLElement<HTMLButtonElement>
	) => {
		addToCartAction(cart, products);
	};

	return <button onClick={handleOnClickAddToCart}>Add to carts</button>;
}

export default AddToCartButton;

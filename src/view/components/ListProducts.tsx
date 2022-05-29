// @ts-ignore
import React from 'react';
import { useProductsInCart } from '../../services/adapter/purchaseAdapter';
import ProductItem from './ProductItem';

function ListProducts(props): React.ReactNode {
	const products = useProductsInCart();
	if (!products) return null;
	return (
		<div>
			{products.map((productModel) => {
				const productData = {
					id: productModel.getId(),
					title: productModel.getTitle(),
					price: productModel.getPrice(),
				};
				return <ProductItem product={productData} />;
			})}
		</div>
	);
}

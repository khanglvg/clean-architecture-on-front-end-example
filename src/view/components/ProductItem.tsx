// @ts-ignore
import React from 'react';
import { Product } from '../../domain/product';

export type ProductItemProps = {
	product: Product;
};

function ProductItem(props: ProductItemProps): JSX.Element {
	const { product } = props;
	return (
		<div>
			{product.id}
			{product.title}
			{product.price}
		</div>
	);
}

export default ProductItem;

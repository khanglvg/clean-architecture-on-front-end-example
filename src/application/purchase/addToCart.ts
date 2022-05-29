import { CartModel } from '../../domain/cart';
import { Product, ProductModel } from '../../domain/product';

export default function addToCart(
	cart: CartModel,
	products: Array<Product>
): CartModel {
	let cartInstance = cart;
	if (!cart) {
		cartInstance = new CartModel([]);
	}

	const newProducts: Array<ProductModel> = [];

	let productModel: ProductModel | null = null;
	for (let i = 0; i < products.length; i++) {
		const productDatum = products[i];
		if (productDatum) {
			productModel = new ProductModel(
				productDatum.id,
				productDatum.title,
				productDatum.price
			);
		}
		if (productModel) {
			newProducts.push(productModel);
		}
		productModel = null;
	}

	const currentProducts = cartInstance.getProducts();
	if (currentProducts && currentProducts.length > 0) {
		cartInstance.setProducts([...currentProducts, ...newProducts]);
	} else {
		cartInstance.setProducts([...newProducts]);
	}
	return cartInstance;
}

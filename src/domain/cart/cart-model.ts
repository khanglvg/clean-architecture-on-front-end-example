import { ProductModel } from '../product';

class CartModel {
	private products: Array<ProductModel> = [];

	constructor(products: Array<ProductModel>) {
		this.products = products;
	}

	getProducts(): Array<ProductModel> {
		return this.products;
	}

	setProducts(products: Array<ProductModel>): void {
		this.products = products;
	}
}

export default CartModel;

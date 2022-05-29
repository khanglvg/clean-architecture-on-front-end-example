import { CartModel } from '../domain/cart';
import { UserModel } from '../domain/user';
import { Product, ProductModel } from '../domain/product';

export interface IPurchaseController {
	addProductsToCart(cart: CartModel | null, products: Array<Product>): void;
	getCart(): CartModel;
	getProductsList(): Array<ProductModel>;
	getUser(): UserModel | null;
	setUser(user: UserModel): void;
}

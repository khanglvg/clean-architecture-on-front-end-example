import { UserModel } from '../domain/user';
import { IPurchaseController } from './IPurchaseController';
import { IStorage } from '../storage';
import { CartModel } from '../domain/cart';
import addToCart from '../application/purchase/addToCart';
import * as Helper from './helpers';
import { Product, ProductModel } from '../domain/product';
import * as API from '../core/api';

class PurchaseController implements IPurchaseController {
	private user: UserModel;
	private _storage: IStorage;

	constructor(user?: UserModel) {
		if (user) {
			this.user = user;
		}
	}

	public getUser(): UserModel | null {
		return this.user;
	}

	public setUser(user: UserModel): void {
		this.user = user;
	}

	public getCart(): CartModel {
		return this.getCartModel();
	}

	public addProductsToCart(
		cart: CartModel | null,
		products: Array<Product>
	): void {
		let cartInstance = cart;
		if (!cart) {
			cartInstance = this.getCartModel();
		}
		const storage = this.getStorage();
		const userId: string = this.user.getId();
		addToCart(cartInstance, products);
		const cartData = Helper.standardCartData(cartInstance);
		storage.updateCart(userId, cartData);
		API.updateCart(userId, cartData);
	}

	public getProductsList(): Array<ProductModel> {
		const cart = this.getCartModel();
		return cart.getProducts();
	}

	private getCartModel(): CartModel {
		const storage = this.getStorage();
		const userId: string = this.user.getId();
		const currentCartData = storage.getCart(userId);
		let cart: CartModel;
		if (currentCartData) {
			cart = Helper.standardCartModel(currentCartData);
		} else {
			cart = new CartModel([]);
		}
		return cart;
	}

	private getStorage(): IStorage {
		if (this._storage) return this._storage;
		return (this._storage = require('../storage'));
	}
}

export default PurchaseController;

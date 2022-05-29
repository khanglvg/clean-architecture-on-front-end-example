import { UserModel } from '../user';
import { CartModel } from '../cart';

class OrderModel {
	private id: string = '';
	private cart: CartModel;
	private user: UserModel;

	constructor(id: string, cart: CartModel, user: UserModel) {
		this.id = id;
		this.cart = cart;
		this.user = user;
	}

	getId(): string {
		return this.id;
	}

	setId(newId: string): void {
		this.id = newId;
	}

	getCart(): CartModel {
		return this.cart;
	}

	setCart(newCart: CartModel): void {
		this.cart = newCart;
	}

	getUser(): UserModel {
		return this.user;
	}

	setUser(newUser: UserModel): void {
		this.user = newUser;
	}
}

export default OrderModel;

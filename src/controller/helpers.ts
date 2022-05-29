import { CartModel } from '../domain/cart';

export function standardCartModel(cartDataFromStorage): CartModel {
	return new CartModel(cartDataFromStorage);
}
export function standardCartData(cart: CartModel): any {
	return {};
}

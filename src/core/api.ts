import {Cart} from "../domain/cart";

export function fetchUser(userId: string): Promise<any> {
	const executor = (resolve, reject) => {
		// Do call fetch user's data.
	}
	return new Promise<any>(executor);
}

export function paymentConnection(userId: string, paymentMethod: string): Promise<any> {
	const executor = (resolve, reject) => {
		// Do connect payment method to user's profile.
	}
	return new Promise<any>(executor);
}

export function updateCart(userId: string, cart: Cart): Promise<any> {
	const executor = (resolve, reject) => {
		// Do sync user's cart
	}
	return new Promise<any>(executor);
}
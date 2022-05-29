import { IStorage } from './types';
import isFunc from '../lib/isFunc';

class Storage implements IStorage {
	getCart(userId: string, builtKeyFn?: Function) {
		const key = isFunc(builtKeyFn)
			? builtKeyFn(arguments)
			: () => userId + '__cart';

		try {
			return localStorage.getItem(key);
		} catch (error) {
			console.log(`GetCart Error!`, error);
		}
	}

	updateCart(userId: string, cartData: any, builtKeyFn?: Function) {
		const key = isFunc(builtKeyFn)
			? builtKeyFn(arguments)
			: () => userId + '__cart';

		try {
			localStorage.setItem(key, JSON.stringify(cartData));
		} catch (error) {
			console.log(`UpdateCart Error!`, error);
		}
	}
}

export default Storage;
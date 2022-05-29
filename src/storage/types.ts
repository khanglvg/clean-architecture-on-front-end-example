export interface IStorage {
	getCart(userId: string, builtKeyFn?: Function): any;
	updateCart(userId: string, cartData: any, builtKeyFn?: Function): void;
}
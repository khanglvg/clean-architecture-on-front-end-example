import { Cart } from '../cart';
import { User } from '../user';

export type Order = {
	id: string;
	user: User;
	cart: Cart
	// createdTime, status, totalPrice, staff,...
};

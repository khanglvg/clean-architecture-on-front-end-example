import { useAuth } from './authAdapter';
import { PurchaseController } from '../../bootstrap';
import { useStore } from '../redux/provider';

function validateAuth() {
	const user = useAuth();
	if (PurchaseController.getUser() == null) {
		PurchaseController.setUser(user);
	}
}

export function useCart() {
	validateAuth();
	return PurchaseController.getCart();
}

export function useAddToCart() {
	validateAuth();
	return PurchaseController.addProductsToCart;
}

export function useProductsInCart() {
	validateAuth();
	return PurchaseController.getProductsList();
}

export function useProducts() {
	return useStore().products;
}

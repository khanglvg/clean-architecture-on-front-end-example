// @ts-ignore
import React from 'react';

const StoreContext = React.createContext<any>({
	user: null,
	products: [],
	updateUser: () => null,
	updateProducts: () => [],
});

export const useStore = () => React.useContext(StoreContext);

function Provider(props: { children: any }): JSX.Element {
	const [user, setUser] = React.useState();
	const [products, setProducts] = React.useState([]);

	const value = {
		user,
		products,
		updateUser: setUser,
		updateProducts: setProducts,
	};

	return (
		<StoreContext.Provider value={value}>
			{props.children}
		</StoreContext.Provider>
	);
}
export default Provider;

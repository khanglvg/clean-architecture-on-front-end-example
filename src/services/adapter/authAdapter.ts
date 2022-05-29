import { useStore } from '../redux/provider';

export function useAuth() {
	return useStore().user;
}

import AsyncStorage from '@react-native-async-storage/async-storage';

export const useSaveItem = async (key, data) => {
	try {
		await AsyncStorage.setItem(key, JSON.stringify(data));
		console.log('success');
	} catch (error) {
		console.log(error);
	}
}

export const useReadItem = async (key) => {
	try {
		const item = await AsyncStorage.getItem(key);
		return item || null;
	} catch (error) {
		console.log(error);
	}
}

export const useRemoveItem = async (key) => {
	try {
		await AsyncStorage.removeItem(key);
	} catch (error) {
		console.log(error);
	}
}

export const useGetAllItems = async (keyPrefixFilter) => {
	try {
		const keys = await AsyncStorage.getAllKeys();
		const filteredKeys = keys.length ? keys.filter((key) => {
			return key.includes(keyPrefixFilter);
		}) : [];

		return filteredKeys.length
			? await AsyncStorage.multiGet(filteredKeys)
			: [];
	} catch (error) {
		console.log(error);
	}
}

export const useRemoveAllItems = async () => {
	try {
		await AsyncStorage.clear();
	} catch (error) {
		console.log(error);
	}
}

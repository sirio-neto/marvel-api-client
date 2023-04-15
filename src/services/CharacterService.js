import useMarvelApi from "../hooks/useMarvelApi";

const api = useMarvelApi();
const endPoint = '/characters';

export const getListing = (search) => {
	const url = search ? `${endPoint}?nameStartsWith=${search}` : endPoint;

	return api.get(url);
}

export const getById = (id) => {
	return api.get(`${endPoint}/${id}`)
	.then(response => {
		return response.data;
	})
	.catch(error => {
		console.log(error);
	});
}

export const getListById = (id, listType) => {
	const validListTypes = ['comics', 'events', 'series', 'stories'];

	if (validListTypes.includes(listType)) {
		return api.get(`${endPoint}/${id}/${listType}`)
		.then(response => {
			return response.data;
		})
		.catch(error => {
			console.log(error);
		});
	}
}



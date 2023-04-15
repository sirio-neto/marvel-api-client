import axios from 'axios';
import md5 from 'md5';
import { ENV } from '../../env';

export default function useMarvelApi() {
	const baseUrl = 'http://gateway.marvel.com/v1/public';
	const publicKey = ENV.PUBLIC_KEY;
	const privateKey = ENV.PRIVATE_KEY;
	const ts = Number(Date.now());
	const hash = md5(ts + privateKey + publicKey);

	const instance = axios.create({
		baseURL: baseUrl
	});

	instance.interceptors.request.use(config => {
		config.params = {
			ts: ts,
			hash: hash,
			apikey: publicKey,
			...config.params,
		};

		return config;
	});

	return instance;
}

import * as url from '@/store/utils/config';
import axios from 'axios';

export const api = axios.create({
  baseURL: url.API_SERVER_HOST,
	headers: {
		'Content-Type': 'application/json'
	}
});

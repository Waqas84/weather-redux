import axios from "axios";
import API_KEY from '../../config/keys';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY.Weather_API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
	
	console.log('ROOT_URL: ', ROOT_URL);
	const url = `${ROOT_URL}&q=${city},us`;
	console.log('URL : ', url);
	const request = axios.get(url);
	console.log('request : ', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}

import axios from 'axios';
import rateLimit from 'axios-rate-limit';

const API_KEY = `c65ae98c05d147c0824caa03b1ac3908`;
const API_Endpoint = `https://newsapi.org/v2/top-headlines?country=us`;

const axiosInstance = rateLimit(axios.create(), { maxRequests: 1, perMilliseconds: 1000 });

export function getNews(category = 'General') {
  return axiosInstance.get(`${API_Endpoint}&category=${category}&apiKey=${API_KEY}`);
}

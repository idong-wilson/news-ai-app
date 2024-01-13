import axios from 'axios';

export function getNews(category = 'General') {
  const API_KEY = `af29b7a5c0a649a0adc39920dfe883f5`;
  const API_Endpoint = `https://newsapi.org/v2/top-headlines?country=us&category=${category}`;

  // Return the Axios promise
  return axios.get(`${API_Endpoint}&apiKey=${API_KEY}`);
}

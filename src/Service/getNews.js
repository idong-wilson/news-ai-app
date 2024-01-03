import axios from 'axios';

export function getNews() {
  const API_KEY = `c65ae98c05d147c0824caa03b1ac3908`;
  const API_Endpoint = `https://newsapi.org/v2/top-headlines?country=us`;

    axios.get(`${API_Endpoint}&apiKey=${API_KEY}`)
  
}
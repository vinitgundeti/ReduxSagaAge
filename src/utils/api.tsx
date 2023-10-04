import axios from 'axios';

export const API = {
  product: (text: string) => axios.get('https://dummyjson.com/products/search?q=' + text),
};

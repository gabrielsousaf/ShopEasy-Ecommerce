import axios from 'axios';

const api = axios.create({ baseURL: 'https://fakestoreapi.com/products' });

async function run() {
  try {
    const res = await api.get("/category/men's clothing");
    console.log('sample item keys:', Object.keys(res.data[0] || {}));
    console.log('sample item:', res.data[0]);
  } catch (err) {
    console.error(err);
  }
}

run();

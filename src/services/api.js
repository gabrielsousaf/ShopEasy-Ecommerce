import axios from "axios"

export const api = axios.create({
  baseURL: "https://fakestoreapi.com/products",
})


export const fetchHome = async() => {
  try{
    const res = await api.get('?limit=8')
    return res.data;
  }
  catch( error ) {
    console.error("Error fetching products Home:", error);
  }
}


export const fetchStore = async() => {
  try{
    const res = await api.get('')
    return res.data;
  }
  catch(error) {
    console.error("Error fetching products Store:", error);
  }
}

export const fetchSearch = async (query) => {
  try{
    const res = await api.get('')
    const data = res.data;
    const term = String(query || '').trim().toLowerCase();
    if (!term) return data;
    return data.filter(item => {
      const title = String(item.title || '').toLowerCase();
      const description = String(item.description || '').toLowerCase();
      return title.includes(term) || description.includes(term);
    });
  }
  catch(error) {
    console.error("Error fetching products Search:", error);
  }
}



export const fetchProduct = async (id) => {
  try {
    const res = await api.get(`/${id}`);
    return res.data;
  }
  catch(error) {
    console.error("Error fetching product:", error);
  }
}


export const fetchProductsByCategory = async (category) => {
  try {
    const res = await api.get(`?limit=3&category=${category}`);
    return res.data;
  }
  catch(error) {
    console.error("Error fetching products Category:", error);
  }
}


export const fetchCategoryMen = async () =>{
  try{
  // fetch all and filter locally to keep image URLs consistent across endpoints
  const res = await api.get('');
  return res.data.filter(item => item.category === "men's clothing");
  }
  catch(error){
    console.error("Error fetching products Men:", error);
  }
}


export const fetchCategoryWomen = async () =>{
  try{
  const res = await api.get('');
  return res.data.filter(item => item.category === "women's clothing");
  }
  catch(error){
    console.error("Error fetching products Women:", error);
  }
}


export const fetchCategoryElectronics = async () =>{
  try{
  const res = await api.get('');
  return res.data.filter(item => item.category === 'electronics');
  }
  catch(error){
    console.error("Error fetching products Electronics:", error);
  }
}


export const fetchCategoryJewelery = async () =>{
  try{
  const res = await api.get('');
  return res.data.filter(item => item.category === 'jewelery');
  }
  catch(error){
    console.error("Error fetching products Jewelery:", error);
  }
}
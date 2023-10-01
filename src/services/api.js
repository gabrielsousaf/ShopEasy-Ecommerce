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
    return res.data;
  }
  catch(error) {
    console.error("Error fetching products Store:", error);
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
    const res = await api.get(`/category/${encodeURIComponent("men's clothing")}`);
    return res.data;
  }
  catch(error){
    console.error("Error fetching products Men:", error);
  }
}


export const fetchCategoryWomen = async () =>{
  try{
    const res = await api.get(`/category/women's%20clothing`);
    return res.data;
  }
  catch(error){
    console.error("Error fetching products Women:", error);
  }
}


export const fetchCategoryElectronics = async () =>{
  try{
    const res = await api.get(`/category/electronics`);
    return res.data;
  }
  catch(error){
    console.error("Error fetching products Electronics:", error);
  }
}


export const fetchCategoryJewelery = async () =>{
  try{
    const res = await api.get(`/category/jewelery`);
    return res.data;
  }
  catch(error){
    console.error("Error fetching products Jewelery:", error);
  }
}
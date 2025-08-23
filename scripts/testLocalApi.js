import { fetchStore, fetchHome, fetchCategoryMen, fetchCategoryWomen, fetchCategoryElectronics, fetchCategoryJewelery } from '../src/services/api.js';

(async () => {
  try {
    const all = await fetchStore();
    const home = await fetchHome();
    const men = await fetchCategoryMen();
    const women = await fetchCategoryWomen();
    const electronics = await fetchCategoryElectronics();
    const jewelery = await fetchCategoryJewelery();

    console.log('store[0].image:', all[0]?.image);
    console.log('home[0].image:', home[0]?.image);
    console.log('men[0].image:', men[0]?.image);
    console.log('women[0].image:', women[0]?.image);
    console.log('electronics[0].image:', electronics[0]?.image);
    console.log('jewelery[0].image:', jewelery[0]?.image);

  } catch (err) {
    console.error(err);
  }
})();

import axios from 'axios';

const api = axios.create({ baseURL: 'https://fakestoreapi.com/products' });

async function fetchAll() {
  const [allRes, homeRes, menRes, womenRes, electronicsRes, jeweleryRes] = await Promise.all([
    api.get(''),
    api.get('?limit=8'),
    api.get(`/category/${encodeURIComponent("men's clothing")}`),
    api.get(`/category/women's%20clothing`),
    api.get('/category/electronics'),
    api.get('/category/jewelery'),
  ]);

  return {
    all: allRes.data,
    home: homeRes.data,
    men: menRes.data,
    women: womenRes.data,
    electronics: electronicsRes.data,
    jewelery: jeweleryRes.data,
  };
}

function mapById(list) {
  const map = new Map();
  list.forEach(item => map.set(item.id, item.image));
  return map;
}

(async function() {
  try {
    const data = await fetchAll();

    const sources = Object.keys(data);
    const maps = {};
    for (const s of sources) maps[s] = mapById(data[s]);

    // collect all ids
    const ids = new Set();
    sources.forEach(s => data[s].forEach(p => ids.add(p.id)));

    const diffs = [];
    for (const id of ids) {
      const imgs = {};
      for (const s of sources) imgs[s] = maps[s].get(id) || null;
      const unique = new Set(Object.values(imgs));
      if (unique.size > 1) {
        diffs.push({ id, imgs });
      }
    }

    if (diffs.length === 0) {
      console.log('No differences found across sources.');
    } else {
      console.log('Differences found for these ids:');
      console.dir(diffs, { depth: null });
    }

    // print example for a few ids
    console.log('\nSample images for id=1:');
    for (const s of sources) console.log(s, ':', maps[s].get(1) || 'N/A');

  } catch (err) {
    console.error(err);
  }
})();

// Arrays y Objetos
const products = [
  {
    id: 1,
    name: 'camera',
    image:
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    brand: 'fujifilm',
    stock: 4,
    price: 1200,
    category: ['electronic', 'photography'],
  },
  {
    id: 2,
    name: 'clock',
    image:
      'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    brand: 'michael kors',
    stock: 10,
    price: 400,
    category: ["jeweler's"],
  },
  {
    id: 3,
    name: 'ps5',
    brand: 'sony',
    stock: '20',
    price: 1000,
    category: ['game'],
    imagen:
      'https://images.pexels.com/photos/14824332/pexels-photo-14824332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 4,
    name: 'headphone',
    brand: 'Akita',
    stock: '12',
    price: 300,
    category: ['electronic', 'music'],
    imagen:
      'https://images.pexels.com/photos/14824332/pexels-photo-14824332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

//1. crear una funcion reciba por parametro un id y me devuelva el producto correspondiente a ese id:
const getProductById = (id) => {
  const result = products.find((prod) => prod.id === id);
  return result;
};

console.log(getProductById(2));

//2. Crear una funcion que reciba por parametro una categoria y me devuelva un nuevo array solo con los productos de dicha categoria
const getProductsByCategory = (category) => {
  const result = products.filter((prod) => prod.category.includes(category));
  return result;
};

console.log(getProductsByCategory('electronic'));

// 3. Crear una funcion que reciba por parametro el array de productos y su funcion ordenadora como callback. Esta funcion debera devolver el array ordenado de acuerdo al criterio de ordenamiento.

const orderByRetail = (a, b) => a.price - b.price;
const orderByMajor = (a,b) => 

const orderByPrice = (arrayProduct, callback) => {
  const result = arrayProduct.sort(callback);
  return result;
};

console.log(orderByPrice(products, orderByRetail));

console.log(orderByPrice(products, orderByMajor));



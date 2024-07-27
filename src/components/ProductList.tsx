import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firevase/setup'; // Ensure db is correctly imported from your firebaseConfig file

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  url: string;
  createdAt: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const productsArray: Product[] = querySnapshot.docs.map(doc => ({
        // id: doc.id,
        ...doc.data() as Product
      }));
      setProducts(productsArray);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }
  console.log(products)

  return (
    // <div className="flex flex-wrap justify-center"></div>
    <>

      {products.map(product => (
      <div key={product.id} className="border border-spacing-1 p-2 ml-3 mt-3">
      <img src={product.imageUrl} alt={product.name} className="w-60 h-48" />
      <h1 className="font-bold text-xl">$ {product.price}</h1>
      <h1>{product.name}</h1>
          <h1>{product.category}</h1>
      </div>
           ))}

    </>

    
  );
};

export default ProductList;



 {/* {products.map(product => (
        <div key={product.id} className="bg-white shadow-md rounded m-4 p-4 w-80">
          <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded" />
          <p className="text-gray-800 font-semibold">${product.price}</p>
          <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
          <p className="text-gray-600">{product.category}</p>
        </div> */}
      {/* ))} */}
import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  if (products.length === 0) return <p>Loading...</p>;

  const product = products[count];

  return (
    <>
     <h1 style={{color:'black'}}>Product:{count}</h1>
      <div className='card' style={{
        backgroundColor:'black',
        border: 'none',
        padding: '20px',
        Width: '500px',
        height:'400px',
        margin: '0 auto',
      }}>
        <img className='product-img'style={{
          borderRadius:'20px',
          
        }}src={product.image} alt={product.title} width="250" height="300"/>
        <h2>{product.title}</h2>
        <p>${product.price}</p>
      </div>
      <button style={{margin:'20px',backgroundColor:'#001c44',color:'white',border:'none'}}onClick={() => { setCount(count - 1)}}> Previous product</button>
      <button style={{margin:'20px',backgroundColor:'gold',color:'black',border:'none'}}onClick={() => { setCount(count + 1)}}>Next product</button>
    </>
  );
}

export default App;

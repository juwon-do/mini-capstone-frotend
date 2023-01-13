export function ProductsIndex(props) {
  console.log(props['products']);
  return (
    <div>
      <h1>All Products</h1>
      {props['products'].map(product=> (
        <div className = "products" key = {product.id}>
          <p>Name: {product.name}</p>        
          <p>Price: {product.price}</p>        
          <p>Description: {product.name}</p>        
          <p>Inventory: {product.inventory}</p>        
          <hr />
        </div>
      ))}
    </div>
  );
}
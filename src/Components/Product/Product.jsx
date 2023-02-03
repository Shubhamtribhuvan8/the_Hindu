import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div>
      <h2 style={{ color: "blue" }}>Products Component</h2>
      <p>
       Check Products
      </p>

      {products.length > 0 ? (
        <div
          style={{
            margin: "50px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {products.map((product) => {
            return (
              <div
                key={product.id}
                style={{
                  boxShadow: "0 0 10px black",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <Link to={`/productdetails/${product.id}`}>
                  <img src={product.image} width="300" height="300" />
                </Link>
                <h3>{product.title}</h3>
                <p>$ {product.price}</p>
                <Link to={`/productdetails/${product.id}`}>
                  <button>More Information</button>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <h2 style={{ color: "red", textAlign: "center", margin: "50px" }}>
          Data is not Available
        </h2>
      )}
    </div>
  );
}

export default Products;
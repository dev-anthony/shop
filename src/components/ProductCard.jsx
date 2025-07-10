// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { ProductContext } from "../context/ProductContext";

// function ProductCard() {
//   const { addToCart } = useContext(CartContext);
//   const {products} = useContext(ProductContext);

//   return (
//     <>
  
//       {/* <img src={product.image} alt={product.name} width="100%" />
//       <h3>{product.name}</h3>
//       <p>{product.description}</p>
//       <p><b>${product.price}</b></p>
//       <button onClick={() => addToCart(product)}>Add to Cart</button> */}

//       {products.length === 0 ? (<p>no products available yet</p>) :
//        products.map(item => (
//         <div key={item.id} style={{ width: "200px", margin: "10px", border: "1px solid gray", padding: "10px" }}>
//           <img src={item.image} alt={item.name} width="100%" />
//           <span>{item.name}</span>
//           <span> ${item.price}</span>
//           <button onClick={() => addToCart(item)}>Add to Cart</button>
//         </div>
//     ))}
//     </>
//   );
// }

// export default ProductCard;
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";

function ProductCard() {
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  if (products.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No products available yet</p>;
  }

  return (
    <div className="px-6 py-10">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="shadow-2xl rounded-lg bg-white hover:shadow-xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-100 object-cover rounded mb-3"
            />
           <div className="px-2 pb-2">
             <h3 className="font-semibold text-lg mb-2 ml-2">{item.name}</h3>
            <p className="text-red-600 mb-2 ml-2 ">${item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition w-full"
            >
              Add to Cart
            </button>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;

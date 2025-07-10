// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// function Cart() {
//   const { cart, updateQuantity,removeFromCart, clearCart } = useContext(CartContext);

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div>
//       <h2>Your Cart</h2>
//       {cart.length === 0 ? (
//         <p>Cart is empty</p>
//       ) : (
//         <>
//           {cart.map(item => (
//             <div key={item.id} style={{ marginBottom: "10px" }}>
//               <img src={item.image} alt={item.name} width="50" />
//               <span>{item.name}</span>
//               <span> ${item.price} x </span>
//               {/* <button onClick={()=> updateQuantity(item.id)}>Quantity{count}</button> */}
//               <input
//                 type="number"
//                 value={item.quantity}
//                 min="1"
//                 onChange={e => updateQuantity(item.id, e.target.value)}
//               />
//               <button onClick={() => removeFromCart(item.id)}>Remove</button>
//             </div>
//           ))}
//           <p><b>Total: ${total.toFixed(2)}</b></p>
//           <button onClick={clearCart}>Clear Cart</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="px-4 py-10 max-w-5xl mx-auto">
      <div className="mb-6 text-center w-full bg-gray-100 py-10">
        <h2 className="text-3xl font-bold">Shopping Cart</h2>
        <p className="mt-2">Home / Shopping Cart</p>
      </div>


      {cart.length === 0 ? (
        <p className="text-center text-red-500">Cart is empty!, Add items to your cart.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b pb-4"
              >
                <div className="flex items-center gap-4 w-full sm:w-1/2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <label htmlFor={`qty-${item.id}`} className="text-sm text-gray-500">Qty:</label>
                  <input
                    id={`qty-${item.id}`}
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 px-2 py-1 border rounded text-center"
                  />
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <button
              onClick={clearCart}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;


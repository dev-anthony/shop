// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// function Navbar() {
//   const { cart } = useContext(CartContext);
//   const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <>
//     <div  className="flex justify-between items-center p-4 bg-white shadow w-full text-black">
//       <div className="logo">
//         <h2 className="font-bold text-lg">🛍️Shop</h2>
//       </div>

//       <nav className="flex justify-between gap-4">
//         <Link to="/">Home</Link>
//         <Link to="/cart">Products</Link>
//         <Link to="/cart">Blog</Link>
//         <Link to="/cart">About Us</Link>
//         <Link to="/cart">Contact</Link> 
//       </nav>
//       <div className="cart-icon relative">
//         {/* <Link to="/cart">🛒 ({totalItems})</Link> */}
//         <Link to="/cart" className="relative text-xl">
//           🛒 
//           {totalItems > 0 && (
//             <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs mr-4 mb-9">
//               {totalItems}
//             </span>
//           )}
//         </Link>
//         <span><i className="fas fa-search"></i></span>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Navbar;
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow text-black">
      <div className="flex justify-between items-center px-4 py-3 md:px-10">
      
        <div className="logo">
          <h2 className="font-bold text-lg">🛍️Shop</h2>
        </div>

        <nav className="hidden md:flex gap-6 font-medium">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/">Blog</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Contact</Link>
        </nav>

       
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative text-xl">
            🛒
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1.5 text-xs -mt-2 -mr-2">
                {totalItems}
              </span>
            )}
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl focus:outline-none">
              {isMenuOpen ? (<span className="text-xs">✖</span>) : (<span className="text-xs font-bold">☰</span>)}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col md:hidden bg-white px-4 pb-4 text-sm gap-2 transition-all duration-300 ease-in-out shadow-lg">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;

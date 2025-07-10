import { createContext, useState, useEffect } from "react";

 export const ProductContext= createContext();

 export function ProductProvider({children}){
    const [products, setProducts] = useState([]);
    
        useEffect(()=>{
            fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        }, [products]);
        return(
            <ProductContext.Provider value={{products}}>
                {children}
            </ProductContext.Provider>
        );
 }
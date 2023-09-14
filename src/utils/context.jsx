import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    return (
        <Context.Provider
            value={{
                products,
                setProducts,
                categories,
                setCategories,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default AppContext;
import { createContext, useContext, useReducer } from "react";


const cartcontext = createContext()
export const UseCart = () => useContext(cartcontext)

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":

            const additem = state.find((cartItem) => cartItem.id === action.payload.id)
            if (additem) {
                const newQuantity = additem.quantity + action.payload.quantity
                if (newQuantity <= 0) {

                    return state.filter((prev) => prev.id !== action.payload.id)

                }
                return state.map((cartitem) =>
                    cartitem.id === action.payload.id ?
                        { ...cartitem, quantity: cartitem.quantity + action.payload.quantity }
                        : cartitem

                )
            }
            else {
                return [...state, { ...action.payload, quantity: action.payload.quantity }]
            }

        case "REMOVE":

        return    state.filter((prevItem) => prevItem.id !== action.payload.id)


    }
}

export const CartProvider = ({ children }) => {

    const [cart, dispatch] = useReducer(cartReducer, [])

    const AddToCart = (item) => {

        dispatch({ type: "ADD", payload: item });

    }
    const RemoveToCart = (item) => {

        dispatch({ type: "REMOVE", payload: item })

    }

    const calculateSubtotal = () => {
        return cart.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);
    };

    return (
        <cartcontext.Provider value={{ cart, AddToCart, calculateSubtotal, RemoveToCart }} >
            {children}
        </cartcontext.Provider>
    )

}
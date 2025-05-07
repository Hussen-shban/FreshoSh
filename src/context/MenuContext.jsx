import { burger2, burger3, burger4, burgerr, drink, drink1, drink2, drink3, drink4, drinkk, food, foodd, hamburger, hamburgerr, heart, heartt, ice, nodd, nood, spa1, spa2, spa3, spa4, stea, steak, Steak1, Steak2, Steak3, Steak4 } from "../assets";

import { createContext, useContext, useEffect, useState } from "react";
const arraymenuitems = [

    {
        id: "1",
        type: "burger",
        img: burgerr,
        name: "Shrimp Burger",
        price: 12.99,
        isliked: false,
        description: "Fresh and perfectly fried shrimp burger, served with a special sauce and delicious flavors that add a unique seafood touch to this tasty meal."
    },

    {
        id: "2",
        type: "burger",
        img: burger2,
        name: "Bacon Cheeseburger",
        price: 14.99,
        isliked: false,
        description: "A juicy beef burger with melted cheese and crispy bacon, served with a special sauce that combines salty and savory flavors for a delightful experience."
    },

    {
        id: "3",
        img: burger3,
        type: "burger",
        name: "Crispy Beef Burger",
        price: 15.99,
        isliked: false,
        description: "A crispy on the outside and tender on the inside beef burger, served with fresh vegetables and a delicious sauce to complete the perfect flavor."
    },

    {
        id: "4",
        type: "burger",
        img: burger4,
        name: "Burger with Black Buns",
        price: 16.99,
        isliked: false,
        description: "An extraordinary burger with premium black buns, filled with savory beef and melted cheese, making it a truly unique dining experience."
    },

    {
        id: "5",
        type: "meats",
        img: Steak1,
        name: "Juicy Beef Steak Burger",
        price: 18.99,
        isliked: false,
        description: "A juicy beef steak burger, grilled to perfection and served with a special sauce and premium toppings for a rich and luxurious flavor."
    },

    {
        id: "6",
        type: "meats",
        img: Steak2,
        name: "Steak Burger with Rosemary",
        price: 19.99,
        isliked: false,
        description: "A tender beef burger with aromatic rosemary, served with a delicious sauce and fresh vegetables for a distinctive taste experience."
    },

    {
        id: "7",
        type: "meats",
        img: Steak3,
        name: "Grilled Steak",
        price: 22.99,
        isliked: false,
        description: "A perfectly grilled steak with a rich and savory taste, served with a special sauce and seasonal vegetables for a well-rounded meal."
    },

    {
        id: "8",
        type: "meats",
        img: Steak4,
        name: "Ribeye Steak",
        price: 24.99,
        isliked: false,
        description: "Tender and juicy ribeye steak, grilled to the perfect level, served with a rich sauce and flavorful sides, making it the perfect choice for steak lovers."
    },

    {
        id: "9",
        type: "spa",
        img: spa1,
        name: "Shrimp Pasta",
        price: 16.9,
        isliked: false,
        description: "Pasta covered in creamy sauce with fresh shrimp, served with flavorful seasonings that highlight the fresh taste of the sea."
    },

    {
        id: "10",
        type: "spa",
        img: spa2,
        name: "Cheesy Mac",
        price: 14.99,
        isliked: false,
        description: "Delicious mac and cheese, with creamy cheese that melts in your mouth, making it the perfect choice for cheese lovers."
    },

    {
        id: "11",
        type: "spa",
        img: spa3,
        name: "Tomato Pasta",
        price: 13.99,
        isliked: false,
        description: "Pasta with fresh tomato sauce, made from ripe tomatoes and balanced spices, creating a simple yet flavorful dish."
    },

    {
        id: "12",
        type: "spa",
        img: spa4,
        name: "Spaghetti Marinara",
        price: 15.99,
        isliked: false,
        description: "Classic spaghetti marinara, with spicy tomato sauce and fresh vegetables, finished with Italian herbs for a perfect Italian meal."
    },

    {
        id: "13",
        type: "drink",
        img: drink1,
        name: "Fruit Ice Blend",
        price: 7.99,
        isliked: false,
        description: "A refreshing blend of fresh fruits and crushed ice, served cold to give you a delicious and cool drink experience."
    },

    {
        id: "14",
        type: "drink",
        img: drink2,
        name: "Orange Ice Drink",
        price: 6.99,
        isliked: false,
        description: "A refreshing iced orange juice drink, natural and tangy, served cold to give you a revitalizing and fresh experience."
    },

    {
        id: "15",
        type: "drink",
        img: drink3,
        name: "Lemon Mint Ice",
        price: 7.49,
        isliked: false,
        description: "A cool and refreshing lemon and mint ice drink, perfect for hot days, offering a tangy flavor with a refreshing minty touch."
    },

    {
        id: "16",
        type: "drink",
        img: drink4,
        name: "Tropical Fruit Ice",
        price: 8.49,
        isliked: false,
        description: "A chilled tropical fruit ice drink, made with fresh tropical fruits, combining sweet and refreshing flavors with a cool and delightful ice finish."
    },

]


const MenuContext = createContext()
export const UseMenu = () => useContext(MenuContext)

export const MenuProvider = ({ children }) => {
    const [originalItems , setoriginalItems] =useState(arraymenuitems)
    const [menuitem, setmenuitems] = useState([])
    useEffect(() => {
        setmenuitems(arraymenuitems)
    }, [])
    return (
        <MenuContext.Provider value={{ menuitem, setmenuitems ,originalItems ,setoriginalItems }} >
            {children}
        </MenuContext.Provider>
    )
}
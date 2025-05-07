import { useParams } from "react-router-dom";
import { spaghetti } from "../assets";
import { UseMenu } from "../context/MenuContext";
import { UseCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";





export default function MenuItem() {

    const { originalItems } = UseMenu()
    const { id } = useParams()
    const { cart, setcart, AddToCart } = UseCart()
    const [quantityy, setquantityy] = useState(1)
    const item = originalItems.find((item) => item.id === id)
    useEffect(() => {

        console.log(cart)

    }

        , [cart])


    function handleaddtocart() {
        AddToCart({ ...item, quantity: quantityy })
        setquantityy(1)
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Item successfully added to your cart."
        });
    }

    const increasequantity = () => {
        setquantityy((prev) => prev + 1)
    }

    const decreaseQuantity = () => {
        setquantityy((prev) => (prev > 1 ? prev - 1 : 1))
    }
    if (!item) {
        return <div>wew</div>
    }
    return (
        <div className="max-ss:h-[100%] bg-blacko flex ss:h-screen max-md:pt-[80px] md:h-[calc(100vh-100px)] md:pt-[10px] overflow-hidden relative ss:items-start ss:justify-around px-10
     pb-[10px]  max-ss:flex-col-reverse max-ss:px-2 max-ss:items-center max-ss:justify-center max-ss:pt-[120px] max-ss:min-h-[100vh]
        ">
            <div className="flex flex-col flex-grow ">
                <div className="text-white mb-5">
                    <p className="text-[42px] font-semibold
                    max-ss:text-[26px] max-ss:pl-[10px] max-ss:max-w-[350px]
                    ">{item.name}</p>
                </div>

                <p className="max-ss:px-[10px]   relative text-[18px] ddd font-medium mb-3
                max-ss:text-[14px]">
                    {item.description}
                </p>
                <div className="flex gap-5 text-white mt-5">

                    <button className="btnn py-[10px] px-[30px] max-ss:px-[20px]  bg-card flex flex-col items-start
                    
                    ">
                        <p className="text-[14px] font-medium max-ss:text-[12px]">Delivery Time</p>
                        <p className="text-[22px] font-semibold flex items-center
                        max-ss:text-[18px] 
                        ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 72 72"><defs><path id="openmojiFourOclock0" d="M36 18.989v17m10.057 5.791l-10-5.774" /></defs><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><circle cx="35.958" cy="35.99" r="23" /><use href="#openmojiFourOclock0" /></g><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><circle cx="35.958" cy="35.99" r="23" /><use href="#openmojiFourOclock0" /></g></svg>
                            25 mins</p>
                    </button>

                    <button className="btnn py-[10px] px-[30px] max-ss:px-[20px] bg-[#38b000] flex flex-col items-start">
                        <p className="text-[14px] font-medium max-ss:text-[12px]">Price</p>
                        <p className="text-[22px] font-semibold max-ss:text-[18px]">$ {item.price}</p>
                    </button>

                </div>
                <div className="mt-10 text-white flex items-center gap-10 max-ss:gap-8">

                    <button
                        onClick={handleaddtocart}
                        className="btnn py-[10px] px-[30px] max-ss:px-[20px]  bg-[#233a95] w-fit">
                        <p className="text-[18px] max-ss:text-[16px] font-semibold " >Add To Cart</p>
                    </button>
                    <div className="flex items-center justify-center gap-3 max-ss:gap-2 ">

                        <button onClick={decreaseQuantity} className=" p-5 max-ss:p-2  rounded-full bg-card  w-[35px] h-[35px] flex items-center justify-center">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M5 13v-1h13v1z" /></svg></span>
                        </button>
                        <p className="text-[20px] max-ss:text-[18px] w-[30px] text-center">{quantityy}</p>

                        <button onClick={increasequantity} className=" p-5 max-ss:p-2 rounded-full bg-card  w-[35px] h-[35px] flex items-center justify-center">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M5 13v-1h6V6h1v6h6v1h-6v6h-1v-6z" /></svg></span>
                        </button>

                    </div>

                </div>









            </div>

            <img className="w-[40%] max-ss:w-[70%]" src={item.img} alt="spaghetti" />
        </div>
    );
}







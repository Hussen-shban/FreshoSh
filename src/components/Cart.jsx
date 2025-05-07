
import { useEffect, useState } from "react";
import { cartt, xmark } from "../assets";
import { UseCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
    const { cart, AddToCart, calculateSubtotal, RemoveToCart } = UseCart();

    const [shipping, setShipping] = useState(5);
    const [isFreeShipping, setIsFreeShipping] = useState(false);
    const [subtotal, setSubtotal] = useState(0);
    const [selectedShipping, setSelectedShipping] = useState("flat");
    const freeShippingThreshold = 100;

    useEffect(() => {
        const newSubtotal = calculateSubtotal();
        const numericSubtotal = Number(newSubtotal);




        setSubtotal(isNaN(numericSubtotal) ? 0 : numericSubtotal);

        if (numericSubtotal >= freeShippingThreshold) {
            setShipping(0);
            setIsFreeShipping(true);
            setSelectedShipping("free")
        } else {
            setShipping(5);
            setIsFreeShipping(false);
            setSelectedShipping("flat")

        }
    }, [cart]);
    const navigate = useNavigate();

    const handleMenuClick = () => {
        navigate("/FreshoSh", { state: { scrollTo: "menu" } });
    };
    const total = selectedShipping === "pickup"
        ? subtotal
        : selectedShipping === "flat" && !isFreeShipping
            ? subtotal + 5
            : subtotal;

    const increaseQuantity = (item) => {
        AddToCart({ ...item, quantity: 1 });
    };

    const decreaseQuantity = (item) => {
        AddToCart({ ...item, quantity: -1 });
    };

    const handleShippingChange = (option) => {
        setSelectedShipping(option);
    };

    const cartItems = cart.map((item) => (
        <>
            <tr className="bop max-ss:hidden" key={item.id}>
                <td><img className="max-w-[4.375rem]" src={item.img} alt={item.name} /></td>
                <td>{item.name}</td>
                <td className="lon1">${item.price}</td>
                <td>
                    <div className="flex items-center justify-center gap-3 max-ss:gap-2">
                        <button onClick={() => decreaseQuantity(item)} className="p-2 rounded-full bg-card w-[35px] h-[35px] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#fff" d="M5 13v-1h13v1z" /></svg>
                        </button>
                        <p className="text-[20px] max-ss:text-[18px] w-[30px] text-center">{item.quantity}</p>
                        <button onClick={() => increaseQuantity(item)} className="p-2 rounded-full bg-card w-[35px] h-[35px] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#fff" d="M5 13v-1h6V6h1v6h6v1h-6v6h-1v-6z" /></svg>
                        </button>
                    </div>
                </td>
                <td className="lon">${(item.quantity * item.price).toFixed(2)}</td>
                <td  ><img className=" cursor-pointer" onClick={() => RemoveToCart(item)} src={xmark} alt="Remove" /></td>
            </tr>

            <tr className="bop ss:hidden" key={item.id}>
                <td><img className="max-w-[3.375rem]" src={item.img} alt={item.name} /></td>

                <td className="lon1">${item.price}</td>
                <td>
                    <div className="flex items-center justify-center  ">
                        <button onClick={() => decreaseQuantity(item)} className="p-2 rounded-full bg-card w-[30px] h-[30px] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="#fff" d="M5 13v-1h13v1z" /></svg>
                        </button>
                        <p className="text-[16px] w-[25px] text-center">{item.quantity}</p>
                        <button onClick={() => increaseQuantity(item)} className="p-2 rounded-full bg-card w-[30px] h-[30px] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#fff" d="M5 13v-1h6V6h1v6h6v1h-6v6h-1v-6z" /></svg>
                        </button>
                    </div>
                </td>
            </tr>
        </>

    ));

    return (
        <>
            {cart.length !== 0 ? (
                <div className=" max-md:pt-[80px] md:h-[calc(100vh-100px)] md:pt-[10px] ss:px-10 max-ss:px-5 pb-[10px]  max-ss:pt-[80px] max-ss:min-h-[100vh] flex justify-around
                max-lg:flex max-md:flex-col  max-md:items-center  max-lg:justify-center 
                ">
                    <div className="lon w-[73%] max-lg:w-[100%]">
                        <div className="bor p-[20px] mb-[20px]">
                            <p className="text-[14px] pb-[0.625rem] font-medium">
                                {!isFreeShipping ? (
                                    <>
                                        Add <span className="text-[#ed174a] font-semibold">${(freeShippingThreshold - subtotal).toFixed(2)}</span> to cart and get free shipping!
                                    </>
                                ) : (
                                    <span className="text-green-600 font-semibold">Your order qualifies for free shipping!</span>
                                )}
                            </p>

                            <div className="h-[6px] bor bg-[#f2f3f5] rounded overflow-hidden">
                                <div
                                    className={`h-full transition-all duration-300 ${subtotal >= freeShippingThreshold ? 'bg-green-500' : 'bg-[#ed174a]'
                                        }`}
                                    style={{ width: `${Math.min((subtotal / freeShippingThreshold) * 100, 100)}%` }}
                                ></div>
                            </div>
                        </div>

                        <div>
                            <table className="w-full max-ss:hidden">
                                <thead>
                                    <tr className="lon1 bop">
                                        <th></th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>{cartItems}</tbody>
                            </table>
                            <table className="w-full ss:hidden">
                                <thead>
                                    <tr className="lon1 bop">
                                        <th></th>

                                        <th>Price</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>{cartItems}</tbody>
                            </table>
                        </div>
                    </div>

                    <div className="px-[20px] py-[20px] bor w-[23%] lon max-lg:w-[100%]">
                        <p className="bop pb-[20px] font-semibold text-[18px] Dosis">Cart totals</p>

                        <div className="flex items-center justify-between py-[15px] bop text-[14px] font-medium">
                            <p>Subtotal</p>
                            <p className="text-[16px]">${subtotal.toFixed(2)}</p>
                        </div>

                        <div className="flex items-center justify-between py-[15px] bop text-[14px]">
                            <p className="font-medium">Shipping</p>
                            <div className="flex flex-col items-end">
                                <ul className="flex flex-col items-end">
                                    {isFreeShipping && (
                                        <li className="mb-2 flex items-center gap-2">
                                            <label>Free shipping</label>
                                            <input type="radio" name="shipping" value="free" checked={selectedShipping === "free"} onChange={() => handleShippingChange("free")} />
                                        </li>
                                    )}
                                    {!isFreeShipping && (
                                        <li className="mb-2 flex items-center gap-2">
                                            <label>Flat rate: $5.00</label>
                                            <input type="radio" name="shipping" value="flat" checked={selectedShipping === "flat"} onChange={() => handleShippingChange("flat")} />
                                        </li>
                                    )}
                                    <li className="mb-2 flex items-center gap-2">
                                        <label>Local pickup</label>
                                        <input type="radio" name="shipping" value="pickup" checked={selectedShipping === "pickup"} onChange={() => handleShippingChange("pickup")} />
                                    </li>
                                </ul>
                                <p className="text-[#2bbef9] mt-2 text-[14px] font-[400]">Change address</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-[15px] bop text-[14px]">
                            <p className="font-medium">Total</p>
                            <p className="text-[20px] font-medium">${total.toFixed(2)}</p>
                        </div>

                        <button className="w-full font-[500] text-[16px] text-white h-[50px] text-center mt-[20px] rounded-[5px] bg-[#ed174a]">
                            Proceed to checkout
                        </button>
                    </div>
                </div>
            ) : (
                <div className="ss:h-screen max-md:pt-[80px] md:h-[calc(100vh-100px)] max-ss:pl-2 max-ss:pt-[80px] max-ss:min-h-[100vh] flex flex-col items-center justify-center gap-10">
                    <div className="bg-[#eaecef] w-[150px] h-[150px] rounded-full flex items-end justify-center overflow-hidden">
                        <img className="w-[75px] h-[75px]" src={cartt} alt="Empty Cart" />
                    </div>
                    <p className="text-[#ed174a] font-[700] text-[18px] font-dosis">Your cart is currently empty.</p>
                    <Link
                        to="/FreshoSh"
                        state={{ scrollTo: 'menu', itemType: 'food' }}>
                        <button className="bg-[#233a95] px-[25px] py-[13px] text-white rounded-[30px] font-semibold text-[14px] font-dosis">Return to shop</button>

                    </Link>

                </div>
            )}


        </>
    );
}

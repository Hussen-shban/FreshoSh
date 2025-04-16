
import { useEffect, useRef, useState } from "react";
import { cart, search, ssh, list, xmark, arrow, arow } from "../assets";
import gsap from "gsap";


export default function Nav() {
    const [isVisible, setIsVisible] = useState(false);
    const [open, setopen] = useState(false)
    const menuref = useRef(null)
    const li = ["Home", "Our Menu", "Special Offer", "Contact Us"]
    const lists = li.map((l) => {
        return (

            <li key={l} className="text-[18px] cursor-pointer" >
                {l}
            </li>

        )
    })

    // function // 

    function handleopen() {
        if (open) {
            gsap.to(menuref.current, {
                x: "100%",
                opacity: 0,
                duration: 0.2,
                ease: "power3.in",
                onComplete: () => {
                    setopen(false);
                    setIsVisible(false);
                }
            });
        } else {
            setIsVisible(true); 
            setTimeout(() => setopen(true), 10); 
        }
    }


    // function // 

    useEffect(() => {
        if (open && menuref.current) {
            gsap.fromTo(menuref.current,
                { x: "100%", opacity: 0 },
                { x: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
            )
        }
    },
        [open])



    return (
        <>

            <nav className="z-10 sti w-full bg-[#242121] text-white flex items-center justify-between font-semibold px-7 sh max-md:hidden ">
                <div className="flex items-center">
                    <img
                        className="w-[100px] rounded-[0px]  "
                        src={ssh} alt="logo" />
                    <p
                        className="font-lilita
                 text-[26px] 
                  "
                    >FreshoSh</p>

                </div>


                <ul className=" gap-10 flex items-center justify-center">
                    {lists}

                </ul>



                <div className="flex  items-center justify-center gap-6">
                    <img className="w-8 h-8" src={search} alt="search" />

                    <div className=" flex items-center justify-center gap-2">

                        <img className="w-8 h-8" src={cart} alt="cart" />

                        <p className="text-[20px]">Cart</p>
                    </div>

                </div>


            </nav>

            <nav className="z-10 fixed w-full  bg-[#242121] text-white flex items-center justify-between font-semibold px-1 sh md:hidden ">
                <div className="flex items-center">
                    <img
                        className="w-[70px] rounded-[0px]  "
                        src={ssh} alt="logo" />
                    <p
                        className="font-lilita
                 text-[18px] 
                  "
                    >FreshoSh</p>

                </div>

                <div className="flex  items-center justify-center gap-6">

                    <img onClick={handleopen} className="w-8 h-8" src={list} alt="" />


                </div>


            </nav>
            <div>
                {isVisible &&


                    <div
                        ref={menuref}
                        className="absolute md:hidden  right-0  w-[75%] max-xs:w-[100%]  h-screen overflow-y-auto  bg-white z-10 py-5 px-4 " >


                        <img onClick={handleopen} className=" ml-auto w-8 h-8" src={xmark} alt="search" />

                        <div className="pt-5 ">

                            <div className=" flex items-center justify-between sha bord-n m-auto w-[80%] rounded-[10px] p-3 px-5 ">
                                <div>
                                    <p className="text-gray-400 text-[14px]">Your Location</p>
                                    <p className="text-blacko" >Select a Location</p>
                                </div>
                                <img src={arrow} alt="" />
                            </div>



                            <div className=" mt-10 flex items-center justify-between bg-freshoOrange  m-auto w-[80%] rounded-[10px] p-3 px-5 py-4 ">
                                <img src={list} />
                                <p className="text-white">ALL CATEGORIES</p>
                                <img src={arow} className="" />

                            </div>
                            <div className="mt-11  pb-10">
                                <p className="text-gray-300 border-b p-5 px-5">
                                    Site Navigation
                                </p>
                                <p className="text-blacko border-b p-5 px-5">
                                    Home
                                </p>
                                <p className="text-blacko border-b p-5 px-5">
                                    Special Offer
                                </p>
                                <p className="text-blacko border-b p-5 px-5">
                                    Meats & Seafood
                                </p>

                                <p className="text-blacko border-b p-5 px-5">
                                    Fruits & Vegetables
                                </p>

                                <p className="text-blacko border-b p-5 px-5">
                                    Snacks
                                </p>




                            </div>

                        </div>


                    </div>

                }
            </div>
        </>

    )
}

import { useEffect, useRef, useState } from "react";
import { search, ssh, list, xmark, arrow, arow, carttt, burgerr, hamburgerr, stea, spa1, nood, nodd, drink, drinkk } from "../assets";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { UseCart } from "../context/CartContext";
import { UseMenu } from "../context/MenuContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Nav() {
    const openref = useRef(null);
    const [openall, setOpenAll] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [open, setopen] = useState(false)
    const menuref = useRef(null)

    const { cart } = UseCart()
    const allquantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }


        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [open]);




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

    function handlelocation() {
        Swal.fire({
            html: `
            <div class="bg-white p-">
                <p class="text-[18px] font-medium mb-4 ">Choose your Delivery Location</p>
                <p class="text-[#9b9bb4] mb-10 text-[12px]">Enter your address and we will specify the offer for your area</p>
    
                <ul class=" overflow-y-auto h-[200px] px-1">
                    <li class="flex bl items-center justify-between">
                        <p class="font-medium text-[16px]">New York</p>
                        <p class="text-[#9b9bb4] bor text-[12px] p-1">Min:$110</p>
                    </li>
                    <li class="flex bl items-center justify-between">
                        <p class="font-medium text-[16px]">Texas</p>
                        <p class="text-[#9b9bb4] bor text-[12px] p-1">Min:$110</p>
                    </li>
                    <li class="flex bl items-center justify-between">
                        <p class="font-medium text-[16px]">Florida</p>
                        <p class="text-[#9b9bb4] bor text-[12px] p-1">Min:$110</p>
                    </li>
                    <li class="flex bl items-center justify-between">
                        <p class="font-medium text-[16px]">California</p>
                        <p class="text-[#9b9bb4] bor text-[12px] p-1">Min:$110</p>
                    </li>
                    <li class="flex bl items-center justify-between">
                        <p class="font-medium text-[16px]">Nevada</p>
                        <p class="text-[#9b9bb4] bor text-[12px] p-1">Min:$110</p>
                    </li>
                    <li class="flex bl items-center justify-between">
                        <p class="font-medium text-[16px]">Illinois</p>
                        <p class="text-[#9b9bb4] bor text-[12px] p-1">Min:$110</p>
                    </li>
                    <li class="flex bl items-center justify-between">
                        <p class="font-medium text-[16px]">Arizona</p>
                        <p class="text-[#9b9bb4] bor text-[12px] p-1">Min:$110</p>
                    </li>
                    <li class="flex bl items-center justify-between">
                        <p class="font-medium text-[16px]">Georgia</p>
                        <p class="text-[#9b9bb4] bor text-[12px] p-1">Min:$110</p>
                    </li>
                    <li class="flex bl items-center justify-between">
                        <p class="font-medium text-[16px]">Washington</p>
                        <p class="text-[#9b9bb4] bor text-[12px] p-1">Min:$110</p>
                    </li>
                </ul>
            </div>
            `,
        });
    }
    

    ;

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


    useEffect(() => {
        if (openref.current) {
            if (openall) {
                gsap.fromTo(
                    openref.current,
                    { scaleY: 0, opacity: 0, transformOrigin: 'top' },
                    {
                        scaleY: 1,
                        opacity: 1,
                        duration: 0.5,
                        ease: 'power3.out',
                        display: 'block',
                    }
                );
            } else {
                gsap.to(openref.current, {
                    scaleY: 0,
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power3.in',
                    onComplete: () => {
                        // اختياري: إخفاء العنصر بعد التصغير
                        openref.current.style.display = 'none';
                    },
                });
            }
        }
    }, [openall]);


    const handleOpenAll = () => {
        setOpenAll((prev) => !prev);
    };

    const inputRef = useRef(null);

    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [opens, setopens] = useState(false)
    const { originalItems } = UseMenu()
    const dishOptions = originalItems.map(item => item.name);

    const handleSearch = (event) => {
        const input = event.target.value;
        setQuery(input);

        if (input) {
            const filteredSuggestions = dishOptions.filter((dish) =>
                dish.toLowerCase().includes(input.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };


    const handleSelect = (suggestion) => {
        setQuery(suggestion);
        setSuggestions([]);
    };
    function hand() {
        setopens(true);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setopens(false);
                setQuery("")
                setSuggestions([])
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <>

            <nav className="z-10 sti w-full bg-[#242121] text-white flex items-center justify-between font-semibold px-7 sh max-md:hidden ">
                <div className="flex items-center">
                    <img
                        className="w-[100px] rounded-[0px]  "
                        src={ssh} alt="logo" />
                    <p
                        className="font-lilit
                 text-[26px] 
                  "
                    >FreshoSh</p>

                </div>


                <ul className=" gap-10 flex items-center justify-center">
                    <Link to="/" state={{ scrollTo: "hero" }} >
              
                        <li className="text-[18px] cursor-pointer" >
                            Home
                        </li>
                    </Link>

                    <Link to="/" state={{ scrollTo: "menu" }}>
                        <li className="text-[18px] cursor-pointer" >
                            Our Menu
                        </li>
                    </Link>


                    <Link to="/" state={{ scrollTo: "offer" }}>
                        <li className="text-[18px] cursor-pointer" >
                            Special Offer
                        </li>
                    </Link>
                    <Link to="/" state={{ scrollTo: "contact" }}>
                        <li className="text-[18px] cursor-pointer" >
                            Contact Us
                        </li>

                    </Link>



                </ul>




                <div className="flex  items-center justify-center gap-6">
                    <div ref={inputRef} class="input-wrapper relative">
                        <button onClick={hand} class="icon">
                            <svg
                                width="25px"
                                height="25px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                                    stroke="#fff"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M22 22L20 20"
                                    stroke="#fff"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </svg>
                        </button>

                        <input type="text" name="text" class="input" placeholder="search.." value={query} onChange={handleSearch} />

                        {suggestions.length > 0 && opens && (
                            <ul className="suggestions-list absolute top-[100%] right-0 bg-card text-white border rounded-lg mt-1 w-full max-h-52 overflow-hidden z-10">
                                {suggestions.map((suggestion, index) => (
                                    <li
                                        key={index}
                                        className="suggestion-item p-2 hover:bg-blacko cursor-pointer"
                                        onClick={() => handleSelect(suggestion)} // عند اختيار العنصر
                                    >
                                        {suggestion}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>



                    <div className=" flex items-center justify-center gap-2">
                        <Link to="/cart">
                            <div className="relative">
                                <div className="absolute flex items-center justify-center   top-[-8px] right-[-8px] bg-red-700 rounded-full w-6 h-6 t ">
                                    <p className="text-[14px]" >{allquantity}</p>

                                </div>
                                <img className="w-8 h-8" src={carttt} alt="cart" />

                            </div>

                        </Link>


                    </div>

                </div>


            </nav>

            <nav className="z-10 fixed w-full  bg-[#242121] text-white flex items-center justify-between font-semibold px-1 sh md:hidden h-[70px] ">
                <div className="flex items-center">
                    <img
                        className="w-[70px] rounded-[0px]  "
                        src={ssh} alt="logo" />
                    <p
                        className="font-lilit
                 text-[18px] 
                  "
                    >FreshoSh</p>

                </div>

                <div className="flex  items-center justify-center gap-6">
                    <Link to="/cart" >
                        <div className=" relative ">
                            <div className="absolute flex items-center justify-center   top-[-3px] right-[-7px] bg-red-700 rounded-full w-6 h-6 t ">
                                <p className="text-[14px]" >{allquantity}</p>

                            </div>
                            <img src={carttt} className="w-8 h-8" alt="" />

                        </div>

                    </Link>

                    <img onClick={handleopen} className="w-8 h-8" src={list} alt="" />


                </div>


            </nav>

            <div>
                {isVisible &&


                    <div
                        ref={menuref}
                        className="fixed md:hidden  right-0  w-[75%] max-xs:w-[100%]  h-screen overflow-y-auto  bg-white z-10 py-5  " >


                        <img onClick={handleopen} className=" ml-auto mr-2 w-8 h-8 " src={xmark} alt="search" />

                        <div className="pt-5 ">

                            <div onClick={handlelocation} className=" flex items-center justify-between sha bord-n m-auto w-[80%] rounded-[10px] p-3 px-5 ">
                                <div>
                                    <p className="text-gray-400 text-[14px]">Your Location</p>
                                    <p className="text-[#233a95]" >Select a Location</p>
                                </div>
                                <img src={arrow} alt="" />
                            </div>



                            <div onClick={handleOpenAll} className=" mt-10 flex items-center justify-between bg-[#2bbef9]  m-auto w-[80%] rounded-[10px] p-3 px-5 py-4 ">
                                <img src={list} />
                                <p className="text-white">ALL CATEGORIES</p>
                                <img src={arow} className="" />

                            </div>
                            <div ref={openref} className=" hidden mt-5 ">
                                <ul className="  flex flex-col items-start   w-[100%] text-[#3e445a] text-[16px] font-medium">
                                    <Link
                                        to="/"
                                        state={{ scrollTo: 'menu', itemType: 'burger' }}
                                        className="w-full"
                                        onClick={handleopen}
                                    >
                                        <li className="flex items-center justify-start  w-full gap-5  text-blacko border-b p-5 px-5">
                                            <img className="w-[30px] h-[30px]" src={hamburgerr} alt="" />
                                            <p>Burger</p>

                                        </li>
                                    </Link>
                                    <Link
                                        to="/"
                                        state={{ scrollTo: 'menu', itemType: 'meats' }}
                                        className="w-full"
                                        onClick={handleopen}
                                    >
                                        <li className="flex items-center justify-start gap-5 w-full text-blacko border-b p-5 px-5">
                                            <img className="w-[30px] h-[30px]" src={stea} alt="" />
                                            <p>Steak</p>

                                        </li>
                                    </Link>
                                    <Link
                                        to="/"
                                        state={{ scrollTo: 'menu', itemType: 'spa' }}
                                        className="w-full"
                                        onClick={handleopen}
                                    >
                                        <li className="flex items-center justify-start w-full gap-5  text-blacko border-b p-5 px-5">
                                            <img className="w-[30px] h-[30px]" src={nodd} alt="" />
                                            <p>Pasta</p>

                                        </li>
                                    </Link>
                                    <Link
                                        to="/"
                                        state={{ scrollTo: 'menu', itemType: 'drink' }}
                                        className="w-full"
                                        onClick={handleopen}
                                    >

                                        <li className="flex items-center justify-start w-full gap-5 w-fullgap-5  text-blacko border-b p-5 px-5">
                                            <img className="w-[30px] h-[30px]" src={drinkk} alt="" />
                                            <p>Drink</p>

                                        </li>
                                    </Link>

                                </ul>
                            </div>

                            <div className="mt-11  ">
                           
                                <p className="text-gray-300 border-b p-5 px-5">
                                    Site Navigation
                                </p>
                           


                                <Link onClick={handleopen} to="/" state={{ scrollTo: "hero" }} >
                                <p  className="text-blacko border-b p-5 px-5">
                                    Home
                                </p>
                                </Link>



                                <Link onClick={handleopen} to="/" state={{ scrollTo: "menu" }}>
                                <p  className="text-blacko border-b p-5 px-5">
                                    Our Menu

                                </p>
                                </Link>



                                <Link onClick={handleopen} to="/" state={{ scrollTo: "offer" }}>
                                <p  className="text-blacko border-b p-5 px-5">
                                    Special Offer
                                </p>
                                </Link>

                                <Link onClick={handleopen} to="/" state={{ scrollTo: "contact" }}>
                                <p className="text-blacko border-b p-5 px-5">
                                    Contact Us
                                </p>
                                </Link>





 








                            </div>

                        </div>


                    </div>

                }
            </div>
        </>

    )
}
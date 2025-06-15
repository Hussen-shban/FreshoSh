



// import { useSpring, animated } from "@react-spring/web";

// import { useGesture } from "@use-gesture/react";
import {  spaghetti} from "../assets";
import { useEffect, useState } from "react";

export default function OfferDetails() {
    // const [{ rotateZ }, api] = usespring(() => ({ rotateZ: 0 }));

    // const bind = useGesture({

    //     onDrag: ({ delta: [dx] }) => {
    //         api.start({
    //             rotateZ: rotateZ.get() + dx * 4.5,
    //             config: { tension: 50, friction: 20 }
    //         });
    //     }
    // });


    const [radius, setRadius] = useState(220); // القيمة الأولية

    // تابع لتحديد قيمة radius بناءً على حجم الشاشة
    useEffect(() => {
        const updateRadius = () => {
            const width = window.innerWidth;
            if (width > 620) {
                setRadius(220);
            } else if (width > 450) {
                setRadius(250); // شاشة متوسطة
            }
            else if (width > 375) {
                setRadius(210); // شاشة متوسطة
            }

            else if (width > 320) {
                setRadius(170); // شاشة متوسطة
            }

            else {
                setRadius(150); // شاشة كبيرة
            }
        };

        // إضافة مستمع للتغيرات في الحجم
        window.addEventListener("resize", updateRadius);

        // تحديث عند التحميل الأولي
        updateRadius();

        // تنظيف المستمع عند الخروج من المكون
        return () => window.removeEventListener("resize", updateRadius);
    }, []);
    return (
        <div className="max-ss:h-[100%] bg-blacko flex ss:h-screen max-md:pt-[80px] md:h-[calc(100vh-100px)] md:pt-[10px] overflow-hidden relative ss:items-start ss:justify-around px-10
        max-ss:flex-col-reverse max-ss:px-0 max-ss:justify-center max-ss:items-center max-ss:pt-[60px] max-ss:min-h-[100vh] max-sm:pb-5 max-ss:pb-20
        ">
            <div className="flex flex-col ss:flex-grow ">
                <div className="text-white mb-5">
                    <p className="text-[42px] font-semibold
                    max-ss:text-[26px] max-ss:pl-[10px] max-ss:max-w-[350px]
                    ">Black Spaghetti with Prawns & Herbs</p>
                </div>

                <p className="max-ss:px-[10px] max-ss:hidden z-20 relative text-[18px] ddd font-medium mb-3
                max-ss:text-[14px]">
                    Black Spaghetti with Prawns & Herbs is a nutritious and flavorful dish made with squid ink pasta, succulent prawns, fresh herbs like parsley and basil, garlic, olive oil, a splash of lemon juice, and garnished with chili flakes for a hint of heat.
                </p>

                <p className="max-w-[350px] max-ss:px-[10px] ss:hidden  relative text-[18px] ddd font-medium mb-3
                max-ss:text-[14px] text-wrap">
                    Black Spaghetti with Prawns & Herbs is a nutritious and flavorful dish made with ....
                </p>



                <div className="max-ss:hidden" >
                    {/* <animated.div
                        {...bind()}
                        style={{ rotateZ }}
                        className="m-auto absolute z-10 rounded-full bg-card -bottom-56 left-[20%] mt-10 w-[450px] h-[450px]

                        
                            
                             touch-none
                        
                        "
                    > */}
                    {/* <div className="max-sm:hidden m-auto absolute z-10 rounded-full bg-card -bottom-44 left-[20%] mt-10 w-[450px] h-[450px]" >
                        <div className="w-full h-full relative">
                            {ingredients.map((item, index) => {
                                const angle = (360 / ingredients.length) * index;
                                const radians = (angle * Math.PI) / 180;
                                const x = radius * Math.cos(radians);
                                const y = radius * Math.sin(radians);
                                return (
                                    <img
                                        key={index}
                                        src={item}
                                        className="bla absolute p-3 w-[75px] h-[75px] object-contain rounded-full"
                                        style={{
                                            top: `calc(50% + ${y}px - 37.5px)`,
                                            left: `calc(50% + ${x}px - 37.5px)`,
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div> */}


                </div>
                {/* <div className=" max-sm:hidden flex-grow flex flex-col justify-end h-full pt-[px]" >
                    <div className="ss:hidden h-[58vw] overflow-hidden pt-[20px]  " >

                        <div className="   rounded-full bg-card w-[100vw] h-[100vw] relative bottom-[-6vh]
                             touch-none
                        ">
                            <div className="w-full h-full relative">
                                {ingredients.map((item, index) => {
                                    const angle = (360 / ingredients.length) * index;
                                    const radians = (angle * Math.PI) / 180;
                                    const x = radius * Math.cos(radians);
                                    const y = radius * Math.sin(radians);
                                    return (
                                        <img
                                            key={index}
                                            src={item}
                                            className="bla absolute p-3
                                         w-[75px] h-[75px] object-contain
                                          rounded-full
                                          max-ss:w-[75px] max-ss:h-[75px]
                                          "
                                            style={{
                                                top: `calc(50% + ${y}px - 37.5px)`,
                                                left: `calc(50% + ${x}px - 37.5px)`,
                                            }}
                                        />
                                    );
                                })}
                            </div>
                        </div>


                    </div>
                </div> */}

                <div className=" er flex gap-5 text-white mt-5">

                    <button className="btnn py-[10px] px-[30px] max-ss:px-[20px]  bg-card flex flex-col items-start
                    
                    ">
                        <p className="text-[14px] font-medium max-ss:text-[12px]">Delivery Time</p>
                        <p className="text-[22px] font-semibold flex items-center
                        max-ss:text-[18px] 
                        ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 72 72"><defs><path id="openmojiFourOclock0" d="M36 18.989v17m10.057 5.791l-10-5.774" /></defs><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><circle cx="35.958" cy="35.99" r="23" /><use href="#openmojiFourOclock0" /></g><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><circle cx="35.958" cy="35.99" r="23" /><use href="#openmojiFourOclock0" /></g></svg>
                            25 mins</p>
                    </button>

                    <button className="btnn py-[10px] px-[30px] max-ss:px-[30px] bg-[#38b000] flex flex-col items-start">
                        <p className="text-[14px] font-medium max-ss:text-[12px]">Price</p>
                        <p className="text-[22px] font-semibold max-ss:text-[18px]">$ 20</p>
                    </button>

                </div>


            </div>

            <img className="w-[40%] max-ss:w-[75%]" src={spaghetti} alt="spaghetti" />
        </div>
    );
}







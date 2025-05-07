




import { useGesture } from "@use-gesture/react";
import { egg, ff, kra, mint, oil, salt, spaghetti, toto, zbd } from "../assets";
import { useEffect, useState } from "react";

export default function OfferDetails() {
    const [{ rotateZ }, api] = useSpring(() => ({ rotateZ: 0 }));

    const bind = useGesture({
        // onWheel: ({ delta: [, dy] }) => {
        //     api.start({
        //         rotateZ: rotateZ.get() + dy ,
        //         config: { tension: 50, friction: 20 }
        //     });
        // },
        // onRotate: ({ offset: [angle] }) => {
        //     api.start({ rotateZ: angle  });
        // },
        onDrag: ({ delta: [dx] }) => {
            api.start({
                rotateZ: rotateZ.get() + dx * 4.5,
                config: { tension: 50, friction: 20 }
            });
        }
    });

    const ingredients = [ff, mint, toto, zbd, egg, salt, kra, oil];

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
        max-ss:flex-col-reverse max-ss:px-0 max-ss:justify-end max-ss:items-center max-ss:pt-[60px] max-ss:min-h-[100vh]
        ">
            <div className="flex flex-col flex-grow ">
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

                <p className="text-[18px] max-ss:pl-[10px] font-semibold max-ss:text-[16px] text-white">ingredients :</p>


                <div className="max-ss:hidden" >
                    <animated.div
                        {...bind()}
                        style={{ rotateZ }}
                        className="m-auto absolute z-10 rounded-full bg-card -bottom-56 left-[20%] mt-10 w-[450px] h-[450px]

                        
                            
                             touch-none
                        
                        "
                    >
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
                    </animated.div>
                </div>
                <div className="flex-grow flex flex-col justify-end h-full pt-[px]" >
                    <div className="ss:hidden h-[58vw] overflow-hidden pt-[20px]  " >
                        <animated.div
                            {...bind()}
                            style={{ rotateZ }}
                            className="   rounded-full bg-card w-[100vw] h-[100vw] relative bottom-[-6vh]
                             touch-none
                        "
                        >
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
                        </animated.div>
                    </div>
                </div>


            </div>

            <img className="w-[40%] max-ss:w-[75%]" src={spaghetti} alt="spaghetti" />
        </div>
    );
}







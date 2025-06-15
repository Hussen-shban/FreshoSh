import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-cards';

import "../styles.css";
import { fire, spaghetti } from "../assets";
import { Link } from "react-router-dom";

export default function SpecialOffer() {
    return (
        <section className="
        bg-blacko min-h-screen pt-24 
        flex justify-center items-center
          pb-20
          max-xs:w-[100vw] overflow-hidden
          max-xs:pt-6 max-xs:block max-xs:min-h-[100%]
          ">

            <div className="
            flex flex-row items-center
             justify-around w-full
              flex-wrap gap-24
              ">


                <div className="flex items-center gap-10  " >
                    <div className="text-[32px] text-white font-semibold">
                        <p>We have</p>
                        <p>special offer</p>
                    </div>
                    <img className="w-[50px] " src={fire} />


                </div>

                <div className="max-xs:w-full">
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="
                        mySwiper h-[390px] w-[300px]
                        max-xs:w-[80%] max-xs:h-[55vh]
                        
                         "

                    >
                        {[...Array(3)].map((_, index) => (

                            <SwiperSlide key={index} className="text-white text-center p-5">
                                <Link to="SpecialOffer" >
                                    <div className="flex flex-col gap-10 items-center">
                                        <img
                                            src={spaghetti}
                                            alt="dish"
                                            className="
                                         w-64  object-cover mb-4
                                        max-xs:w-[90%]
                                         "
                                        />
                                        <div className="flex items-center justify-between w-full  gap-12">

                                            <div className="
                                    font-semibold text-[18px] w-full 
                                    max-xs:text-[14px] 
                                    ">
                                                <p>Black Spaghetti </p>
                                                <p>Prawns & Herbs</p>
                                            </div>
                                            <p className="
                                    text-sm text-gray-400
                                    max-xs:text-[14px]
                                    ">⭐ 4.5  300 kcal</p>

                                        </div>

                                    </div>
                                </Link>
                            </SwiperSlide>


                        ))}
                    </Swiper>

                </div>



            </div>


        </section>
    );
}

import { hum, pizza, sh, sla, ssh } from "../assets";


export default function Hero() {


    return(

        <section className="ba h-[100vh]  md:h-[calc(100vh-150px)]  font-lilita text-white flex flex-col items-center justify-center relative overflow-hidden ">
            <div className=" flex items-center justify-center  ">
                <img
                    className="w-[150px] h-[150px] max-ss:h-[100px] max-ss:w-[100px] rounded-[10px]"
                    src={sh} />
                <p className=" max-ss:text-[32px]  text-[45px] font-semibold">FreshoSh</p>

            </div>

            <p className=" gradient-text text-[65px] max-ss:text-[42px] max-xs:text-[37px] text-center font-semibold" >Fast Food Restaurant</p>
            <p className=" gradient-text text-[65px] max-ss:text-[42px] max-xs:text-[37px] font-semibold">Delicious dishes</p>

            <button
                className="btn-hero bg-[#ffffff] w-[200px] max-ss:w-[150px] max-ss:h-[40px] max-ss:text-[18px] h-[50px] rounded-[15px] text-[24px] font-semibold text-freshoOrange mt-4 "
            >Contact Us</button>
            <img className=" absolute top-20 right-10 w-[150px] h-[150px] max-md:hidden " src={pizza} alt="" />
        </section>
    )
}
import { facebook, phone, location, instagram, whatsupp, linkedin } from "../assets";


export default function Upernav() {


    return (
        <div className="  max-md:hidden z-0 bg-freshoOrange w-full text-white h-[50px] flex items-center justify-between px-10">


            <div className="flex items-center gap-5 h-[100%]"  >

                <div className="h-[100%] w-[1px] bg-white" />

                <div className="flex items-center h-[100%]">

                    <img
                        className="w-7 h-7"
                        src={phone} alt="phone" />
                    <p className="text-[18px] font-medium">+963 934865509</p>



                </div>

                <div className="h-[100%] w-[1px] bg-white" />

                <div className="flex items-center h-[100%]">

                    <img
                        className="w-7 h-7"
                        src={location} alt="location" />
                    <p className="text-[18px] font-medium" >Choose your location</p>

                </div>

                <div className="h-[100%] w-[1px] bg-white" />



            </div>



            <div className="flex items-center gap-5">
                <img className="w-7 h-7" src={facebook} alt="facebook" />
                <img className="w-7 h-7" src={instagram} alt="instagram" />
                <img className="w-7 h-7" src={whatsupp} alt="whatsupp" />
                <img className="w-7 h-7" src={linkedin} alt="linkedin" />


            </div>


        </div>
    )
}
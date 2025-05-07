import Swal from "sweetalert2";
import { facebook, phone, location, instagram, whatsupp, linkedin } from "../assets";


export default function Upernav() {

    function handlelocation() {
        Swal.fire({
            html: `
            <div class="bg-white p-2">
                <p class="text-[18px] font-medium mb-1">Choose your Delivery Location</p>
                <p class="text-[#9b9bb4] mb-10">Enter your address and we will specify the offer for your area</p>
    
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

                <div
                    onClick={handlelocation}
                    className="flex items-center h-[100%]">

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
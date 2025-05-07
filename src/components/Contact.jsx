import { useState } from "react";
import { location, phone } from "../assets";


export default function Contact() {

    const [input, setinput] = useState({

        name: "",
        email: "",
        Subject: "",
        message: ""
    })

    return (
        <section>
            <div className=" bg-blacko   max-md:pt-[80px] md:min-h-[calc(100vh-100px)] md:pt-[10px] px-24
       max-ss:pt-[60px] max-ss:min-h-[100vh] max-ss:px-5
        ">
                <div className=" p-[15px] flex flex-col items-center justify-center text-white">
                    <p className="text-[48px] font-mediu text-center">Get In Touch</p>
                    {/* <p className=" text-center leading-6 text-[14px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat unde quam dolor culpa veritatis inventore, aut commodi eum veniam vel.</p> */}

                </div>

                <div className=" mt-[15px] flex sm:items-center sm:justify-center gap-10 max-sm:flex-col">
                    <div className=" h-[220px] flex-grow bg-[#3f3b3b] rounded-[5px] p-[30px] text-white flex flex-col items-center justify-center">
                        <img className="w-[2.25rem] h-[2.25rem] mb-[1.25rem]" src={location} alt="" />
                        <p className="text-[15px] mb-[8px] font-[500]">102 Street 2714 Donovan</p>
                        <p className="text-[14px] text-center">Lorem ipsum dolar site amet discont</p>
                    </div>

                    <div className=" h-[220px] flex-grow bg-[#3f3b3b] rounded-[5px] p-[30px] text-white flex flex-col items-center justify-center">
                        <img className="w-[2.25rem] h-[2.25rem] mb-[1.25rem]" src={phone} alt="" />
                        <p className="text-[15px] text-center mb-[8px] font-[500]">+963 934865509</p>
                        <p className="text-[14px] text-center">Lorem ipsum dolar site amet discont</p>
                    </div>



                    <div className=" h-[220px] flex-grow bg-[#3f3b3b] rounded-[5px] p-[30px] text-white flex flex-col items-center justify-center">
                        {/* <img className="w-[2.25rem] h-[2.25rem] mb-[1.25rem]" alt="" /> */}
                        <svg className="w-[2.25rem] h-[2.25rem] mb-[1.25rem]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M14.95 3.684L8.637 8.912a1 1 0 0 1-1.276 0l-6.31-5.228A1 1 0 0 0 1 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-.05-.316M2 2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m-.21 1l5.576 4.603a1 1 0 0 0 1.27.003L14.268 3z" /></svg>
                        <p className="text-[15px] mb-[8px] font-[500]">info@example.com</p>
                        <p className="text-[14px] text-center">Lorem ipsum dolar site amet discont</p>
                    </div>
                </div>

                <div className="py-[60px] mt-[40px] bg-[#3f3b3b] flex items-center justify-center flex-col px-32 max-md:px-4 max-ss:py-[10px] ">
                    <div className=" w-fit p-[15px] flex flex-col items-center bo justify-center text-white pb-[60px] mb-[52px]  max-ss:pb-[30px]  max-ss:mb-[22px]">
                        <p className="text-[48px] font-mediu text-center">Send Us</p>
                        {/* <p className=" text-center leading-6 text-[14px] font-[400]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat unde quam dolor culpa veritatis inventore, aut commodi eum veniam vel.</p> */}

                    </div>

                    <form
                        action="https://formspree.io/f/xpwdpyed"
                        method="POST"
                        className="flex flex-col w-full px-5 max-ss:px-0 gap-5 text-white"
                    >
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col flex-grow gap-3">
                                <label htmlFor="name">Your name *</label>
                                <input
                                    name="name"
                                    required
                                    className="bg-[#f3f4f7] h-[2.875rem] rounded-[5px] px-2 outline-none text-[#3f3b3b]"
                                    id="name"
                                    type="text"
                                />
                            </div>

                            <div className="flex flex-col flex-grow gap-3">
                                <label htmlFor="email">Your email *</label>
                                <input
                                    name="email"
                                    required
                                    className="bg-[#f3f4f7] h-[2.875rem] rounded-[5px] px-2 outline-none text-[#3f3b3b]"
                                    id="email"
                                    type="email"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col flex-grow gap-3">
                            <label htmlFor="subject">Subject *</label>
                            <input
                                name="subject"
                                required
                                className="bg-[#f3f4f7] h-[2.875rem] rounded-[5px] px-2 outline-none text-[#3f3b3b]"
                                id="subject"
                                type="text"
                            />
                        </div>

                        <div className="flex flex-col flex-grow gap-3">
                            <label htmlFor="message">Your message</label>
                            <textarea
                                name="message"
                                required
                                className="min-h-[120px] bg-[#f3f4f7] rounded-[5px] px-2 outline-none text-[#3f3b3b]"
                                id="message"
                            />
                        </div>

                        <button type="submit" className="w-40 h-16 rounded-[5px] tex bg-card">
                            Send Message
                        </button>
                    </form>


                </div>







            </div>



        </section>
    )
}
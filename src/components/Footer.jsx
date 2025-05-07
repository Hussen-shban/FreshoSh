// import { useState } from "react";
// import { food, ph3 } from "../assets";


// export default function Footer() {
//     const area1 = [
//         "Fresh Vegetables",
//         "Herbs & Seasonings",
//         "Fresh Fruits",
//         "Cuts & Sprouts",
//         "Exotic Fruits & Veggies",
//         "Packaged Produce",
//         "Party Trays",
//         "Herbs & Seasonings",

//     ]
//     const area2 = [
//         "Breakfast Sausage",
//         "BeDinner Sausageef",
//         "Beef",
//         "Chicken",
//         "BeSliced Deli Meatef",
//         "Shrimp",
//         "Wild Caught Fillets",
//         "Wild Caught Fillets",
//         "Crab and Shellfish",
//     ]

//     const l1 = area1.map((item) => {
//         return (
//             <li className="fof mb-[8px]">{item}</li>
//         )
//     })

//     const l2 = area2.map((item) => {
//         return (
//             <li className="fof mb-[8px]">{item}</li>
//         )
//     })

//     const [loading, setloading] = useState(false)
//     const [loadingg, setloadingg] = useState(false)
//     function handleloading() {
//         setloading(true)

//         setTimeout(() => {

//             setloading(false)
//             setloadingg(true)
//         }, 2000);



//     }
//     return (
//         <footer
//             className=" bg-blacko er  max-md:pt-[80px]  md:min-h-[calc(100vh-100px)] md:pt-[100px]
//         max-ss:pt-[100px] max-ss:min-h-[100vh]  overflow-hidden

//          "
//         >
//             <div className="bg-[#3f3b3b]   pt-[40px] flex items-end justify-between px-10  mb-32 h-[400px]">
//                 <div className="pb-20">
//                     <p className="text-white text-[1rem] font-[300] mb-[8px] ">$20 discount for your first order</p>
//                     <p className="text-white text-[26px] font-[600] mb-[15px] " >Join our newsletter and get...</p>
//                     <p className="text-[#ffffff8a] w-[330px] text-[14px] font-[400] mb-[16px]">Join our email subscription now to get updates on promotions and coupons.</p>
//                     <form >
//                         <div className="  px-5 py-4 flex items-center justify-center bg-[#ffffff13] rounded-[5px] ">
//                             <svg className="w-[30px] h-[30px] " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M14.95 3.684L8.637 8.912a1 1 0 0 1-1.276 0l-6.31-5.228A1 1 0 0 0 1 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-.05-.316M2 2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m-.21 1l5.576 4.603a1 1 0 0 0 1.27.003L14.268 3z" /></svg>



//                             <input placeholder="Your email address" className=" px-5 text-white bg-transparent outline-none" type="email" required />
//                             <button disabled={!loadingg ? false : true} onClick={handleloading} className=" w-[100px] h-[50px] flex items-center justify-center rounded-[5px] text-[14px] text-white bg-[#3f3b3b]  outline-none"  >
//                                 {!loading ? "Subscribe" : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c4.97 0 9 4.03 9 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0" /><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></path></svg>}
//                             </button>

//                         </div>
//                     </form>

//                     <p className={loadingg ? "text-white w-[475px] text-[14px] mt-2  " : " opacity-0 w-[475px] mt-2  "}>Thank you, your sign-up request was successful! Please check your email inbox to confirm.</p>
//                 </div>
//                 <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png" alt="" />
//             </div>
//             <div className="  px-24  max-ss:px-10 flex items-cente justify-between flex-wrap gap-20">
//                 <ul>
//                     <p className="pb-5 text-white text-[22px] ">Meat & Seafood</p>
//                     {l1}
//                 </ul>

//                 <ul>
//                     <p className="pb-5 text-white text-[22px] ">Breads & Bakery</p>
//                     {l2}
//                 </ul>

//                 <ul>
//                     <p className="pb-5 text-white text-[22px] ">Beverages</p>
//                     {l1}
//                 </ul>


//                 <ul>
//                     <p className="pb-5 text-white text-[22px] ">Department</p>
//                     {l2}
//                 </ul>
//             </div>


//         </footer>
//     )


// }

import { useState, useRef } from "react";

export default function Footer() {
    const area1 = [
        "Fresh Vegetables",
        "Herbs & Seasonings",
        "Fresh Fruits",
        "Cuts & Sprouts",
        "Exotic Fruits & Veggies",
        "Packaged Produce",
        "Party Trays",
        "Herbs & Seasonings",
    ];

    const area2 = [
        "Breakfast Sausage",
        "Dinner Sausage",
        "Beef",
        "Chicken",
        "Sliced Deli Meat",
        "Shrimp",
        "Wild Caught Fillets",
        "Crab and Shellfish",
    ];

    const l1 = area1.map((item, index) => (
        <li key={index} className="fof mb-[8px]">{item}</li>
    ));

    const l2 = area2.map((item, index) => (
        <li key={index} className="fof mb-[8px]">{item}</li>
    ));

    const [loading, setloading] = useState(false);
    const [loadingg, setloadingg] = useState(false);
    const emailRef = useRef(null);

    function handleloading(e) {
        e.preventDefault();

        const emailInput = emailRef.current;
        if (!emailInput.checkValidity()) {
            emailInput.reportValidity();
            return;
        }

        setloading(true);
        setTimeout(() => {
            setloading(false);
            setloadingg(true);
            emailInput.value = ""
        }, 2000);
    }

    return (
        <footer className="bg-blacko er max-md:pt-[80px] md:min-h-[calc(100vh-100px)] md:pt-[100px] max-ss:pt-[100px] max-ss:min-h-[100vh] overflow-hidden">
            <div className="
            
            bg-[#3f3b3b] pt-[40px] flex items-end justify-between px-10 mb-32 h-[400px]
             max-ss:px-4  max-ss:h-full max-ss:block 
            ">
                <div className="pb-20 max-ss:pb-0">
                    <p className="text-white text-[1rem] font-[300] mb-[8px] max-ss:text-[16px] ">$20 discount for your first order</p>
                    <p className="text-white text-[26px] font-[600] mb-[15px] max-ss:text-[24px]">Join our newsletter and get...</p>
                    <p className="text-[#ffffff8a] w-[330px] text-[14px] font-[400] mb-[16px] max-ss:w-full max-ss:text-[12px]">
                        Join our email subscription now to get updates on promotions and coupons.
                    </p>
                    <form onSubmit={handleloading}>
                        <div className="px-5 py-4 flex items-center justify-center bg-[#ffffff13] rounded-[5px]
                         max-ss:px-3  max-ss:py-4
                        ">
                            <svg className="w-[30px] h-[30px]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <path fill="#fff" fillRule="evenodd" d="M14.95 3.684L8.637 8.912a1 1 0 0 1-1.276 0l-6.31-5.228A1 1 0 0 0 1 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-.05-.316M2 2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m-.21 1l5.576 4.603a1 1 0 0 0 1.27.003L14.268 3z" />
                            </svg>
                            <input
                                ref={emailRef}
                                placeholder="Your email address"
                                className="px-5 text-white bg-transparent outline-none
                                max-ss:px-3 w-full
                                "
                                type="email"
                                required
                            />
                            <button
                                type="submit"
                                disabled={loadingg}
                                className="w-[120px] h-[50px] flex items-center justify-center rounded-[5px] text-[14px] text-white bg-[#3f3b3b] outline-none
                                  
                                "
                            >
                                {!loading ? "Subscribe" : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="none" stroke="#fff" strokeDasharray="16" strokeDashoffset="16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3c4.97 0 9 4.03 9 9">
                                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0" />
                                            <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
                                        </path>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </form>
                    <p className={loadingg ? "text-white w-[475px] max-ss:w-full text-[14px] max-ss:text-[12px] mt-2 max-ss:pb-10 " : " max-ss:pb-10 opacity-0 max-ss:w-full w-[475px] mt-2"}>
                        Thank you, your sign-up request was successful! Please check your email inbox to confirm.
                    </p>
                </div>
                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png" alt="" />
            </div>

            <div className="bop pb-16 px-24 max-ss:px-10 flex items-cente justify-between flex-wrap gap-20">
                <ul>
                    <p className="pb-5 text-white text-[22px]">Meat & Seafood</p>
                    {l1}
                </ul>

                <ul>
                    <p className="pb-5 text-white text-[22px]">Breads & Bakery</p>
                    {l2}
                </ul>

                <ul>
                    <p className="pb-5 text-white text-[22px]">Beverages</p>
                    {l1}
                </ul>

                <ul>
                    <p className="pb-5 text-white text-[22px]">Department</p>
                    {l2}
                </ul>
            </div>

            <div className="er px-10 max-sm:px-2 text-white text-[14px] gap-5 font-semibold max-sm:flex-col py-16  flex items-center justify-around max-sm:items-start ">
                <div className="flex items-center justify-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 16 16">
                        <path fill="currentColor" d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"></path>
                    </svg>
                    <p>The design is Inspired by bee ui.ux</p>
                </div>



                <div className="flex items-center justify-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 32 32">
                        <g fill="currentColor">
                            <path d="M15.55 10.51C14.93 9.92 13.693 9 12 9c-2.5 0-4 2-4 5c0 4 6.5 9 8 9s8-5 8-9c0-3-1.5-5-4-5c-1.694 0-2.93.919-3.55 1.51a.675.675 0 0 1-.9 0"></path>
                            <path d="M1 8a3 3 0 0 1 3-3h24a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-.816.421l4.61 3.073a6.5 6.5 0 0 0-.663 1.962L3 9.702V22.36l5.874-3.738a17 17 0 0 0 1.31 1.537l-6.982 4.443A1 1 0 0 0 4 25h24a1 1 0 0 0 .798-.398l-6.983-4.443c.463-.483.908-1 1.311-1.537L29 22.36V9.702l-4.13 2.754a6.5 6.5 0 0 0-.664-1.962l4.61-3.073A1 1 0 0 0 28 7z"></path>
                        </g>
                    </svg>
                    <p>Thanks to Bacola for providing an idea.</p>
                </div>



                <div className="flex items-center justify-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M16.317 3.923q1.962 0 3.323 1.504T21 9.057q0 .624-.136 1.244t-.435 1.199h-5.173l-1.79-2.78h-.935l-1.677 5.126L9.256 11.5H3.57q-.298-.579-.435-1.19Q3 9.7 3 9.083Q3 6.93 4.348 5.427t3.31-1.504q1.026 0 1.974.418q.947.417 1.695 1.209l.673.712l.635-.673q.761-.812 1.718-1.239t1.964-.427m-4.342 16.604l-7.179-7.229q-.188-.188-.362-.387q-.173-.197-.317-.411H8.72l1.84 2.767h.93l1.657-5.151l1.592 2.384h5.139q-.144.208-.317.406t-.356.386z"></path>
                    </svg>
                    <p>This site is for training purposes</p>
                </div>
            </div>
        </footer>
    );
}

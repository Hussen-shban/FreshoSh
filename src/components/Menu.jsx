import { useEffect, useState } from "react";
import { burger2, burger3, burger4, burgerr, drink, drink1, drink2, drink3, drink4, drinkk, food, foodd, hamburger, hamburgerr, heart, heartt, ice, nodd, nood, spa1, spa2, spa3, spa4, stea, steak, Steak1, Steak2, Steak3, Steak4 } from "../assets";
import { Link, useLocation } from "react-router-dom";
import { UseMenu } from "../context/MenuContext";



export default function Menu() {


    const { menuitem, setmenuitems, originalItems, setoriginalItems } = UseMenu();
    const [selectedType, setSelectedType] = useState("food");


    function handleitemtype(type) {
        setSelectedType(type)
        setmenuitems(type === "food" ? originalItems : originalItems.filter(item => item.type === type));
    }
    function hanldleisloved(id) {
        const update = (items) =>
            items.map(item =>
                item.id === id ? { ...item, isliked: !item.isliked } : item
            );

        setoriginalItems(prev => update(prev));
        setmenuitems(prev => update(prev));

    }





    const show = menuitem.map((item) => {
        return (
            <div key={item.id}


                className="
         menuitem relative text-white w-[250px] h-[200px] flex flex-col justify-end  p-4 mt-20 
         max-xs:w-[160px] max-xs:h-[130px] max-xs:p-[10px]
        ">
                <Link to={`item/${item.id}`} >

                    <img
                        className="w-[200px] h-[170px] object-contain absolute top-[-70px]   left-1/2 -translate-x-1/2
             max-xs:w-[130px] max-xs:h-[100px]  max-xs:top-[-50px]
            
            "
                        src={item.img} />
                </Link>

                <p className="
            text-[16px] font-medium mb-4
            max-xs:text-[14px]
            ">{item.name}</p>

                <div className="flex items-center justify-between" >
                    <p className="
                text-[16px] font-medium
                max-xs:text-[14px]
                " >{item.price} $</p>
                    <img
                        onClick={() => hanldleisloved(item.id)}
                        className="max-xs:w-[20px] w-[25px]"
                        src={item.isliked ? heartt : heart}
                        alt="heart" />
                </div>

            </div>
        )
    })
    const location = useLocation();
    useEffect(() => {
        // عند تغيير الحالة أو عند تحميل الصفحة، تحقق من نوع العنصر المرسل من Nav
        if (location.state?.itemType) {
          setSelectedType(location.state.itemType); // تحديث النوع بناءً على الرابط
    
          setmenuitems(location.state.itemType === "food" ? originalItems : originalItems.filter(item => item.type === location.state.itemType));
        }
      }, [location.state]);

    return (
        <section className="bg-blacko  max-xs:min-h-screen md:min-h-[calc(100vh-100px)] pt-20 flex flex-col max-xs:pt-[90px]  max-xs:justify-cente pb-10  ">
            <div className="w-full">
                <p className="text-white ml-9 max-xs:ml-3 text-[32px] max-xs:text-[22px]  font-semibold ">
                    Fresh Flavors
                </p>
                <p className="text-white ml-9 max-xs:ml-3  text-[32px] max-xs:text-[22px] font-semibold  ">
                    Every Bite!
                </p>
            </div>

            <div className=" flex items-center justify-center gap-20 max-xs:gap-1 max-xs:mt-10 max-md:mt-5 max-xs:justify-around flex-wrap   ">

                <img
                    onClick={() => handleitemtype("food")}

                    className={`
                    d w-[60px] h-[60px] p-[13px] max-xs:w-[50px] max-xs:h-[50px] max-xs:p-[10px]
                    ${selectedType === "food" ? "dd" : ""}
                    `}
                    src={selectedType === "food" ? foodd : food} alt="nood" />


                <img
                    onClick={() => handleitemtype("burger")}
                    className={`
                        d w-[60px] h-[60px] p-[13px] max-xs:w-[50px] max-xs:h-[50px] max-xs:p-[10px]
                        ${selectedType === "burger" ? "dd" : ""}                        `}
                    src={selectedType === "burger" ? hamburgerr : hamburger} alt="hamburger" />

                <img
                    onClick={() => handleitemtype("meats")}

                    className={`
                        d w-[60px] h-[60px] p-[13px] max-xs:w-[50px] max-xs:h-[50px] max-xs:p-[10px]
                        ${selectedType === "meats" ? "dd" : ""}
                        `}
                    src={selectedType === "meats" ? stea : steak} alt="nood" />

                <img
                    onClick={() => handleitemtype("spa")}

                    className={`
                        d w-[60px] h-[60px] p-[13px] max-xs:w-[50px] max-xs:h-[50px] max-xs:p-[10px]
                        ${selectedType === "spa" ? "dd" : ""}
                        `}
                    src={selectedType === "spa" ? nodd : nood} alt="nood" />
                <img
                    onClick={() => handleitemtype("drink")}

                    className={`
                        d w-[60px] h-[60px] p-[13px] max-xs:w-[50px] max-xs:h-[50px] max-xs:p-[10px]
                        ${selectedType === "drink" ? "dd" : ""}
                        `}
                    src={selectedType === "drink" ? drinkk : drink} alt="hamburger" />



            </div>



            <div className="
             mt-16 flex items-center flex-row
              justify-around w-full flex-wrap
              gap-4 px-3
              
              ">

                {show}






            </div>






        </section>

    )
} 
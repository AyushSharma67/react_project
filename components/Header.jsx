import { Link } from "react-router"
export default function Header(){
    return(
        <header className="bg-[#ff5200] font-serif">
            <div className="flex justify-between container mx-auto py-8">
                <img src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" className="w-40 h-12"></img>
                <div className="text-white text-base font-bold gap-15 flex items-center">
                    <a href="https://www.swiggy.com/corporate/" target="_blank" >Swiggy Corporate</a>
                    <a href="https://partner.swiggy.com/login#/swiggy" target="_blank" >Partner with us</a>
                    <a href="" target="_blank" className="border border-white py-3 px-4 rounded" >Get the app</a>
                    <a href="" target="_blank" className="border border-black bg-black py-3 px-4 rounded" >Sign in</a>

                </div>
            </div>
            <div className="pt-16 pb-8 relative">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" className="absolute top-0 left-0 h-110 w-60"></img>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" className="absolute top-0 right-0 h-110 w-60"></img>
                <div className="text-5xl text-white font-bold max-w-[60%] container mx-auto text-center">
                    Order food & groceries. Discover best restaurants. Swiggy it!
                </div>
                <div className="max-w-[70%] container mx-auto flex gap-5 mt-10">
                    <input placeholder="Shakti Khand-4,Indirapuram" className="bg-white w-[40%] text-xl px-6 py-4 rounded-2xl"></input>
                    <input placeholder="Search for restaurant,item or more" className="bg-white w-[55%] text-xl px-6 py-4 rounded-2xl"></input>
                </div>
            </div>
            <div className="max-w-[80%] flex container mx-auto">
               <Link to="/restaurant">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
               </Link>
               <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
               </a>
                <a href="https://www.swiggy.com/dineout">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
                </a>

            </div>
        </header>
    )

}
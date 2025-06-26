import { useState,useEffect } from "react";
import { Link, useParams } from "react-router"
import MenuCard from "./MenuCard";

export default function RestrauMenu(){
    const[selected,setselected]=useState(null);
    let {id}=useParams();
    const[RestData,setRestData]=useState([]);
    useEffect(()=>{
        
         async function fetchData() {
            
            const proxyServer = "https://cors-anywhere.herokuapp.com/"
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6508581&lng=77.37120259999999&restaurantId=${id}`;
            const response = await fetch(proxyServer+swiggyAPI);
            const data = await response.json();
            const tempData=data?.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData=tempData.filter((items)=>'title' in items?.card?.card);
            setRestData(filterData);
         }
    
         fetchData();
        },[])
        // if(selected==='veg'){

        // }

    
    return(
        <div>
            <div className="w-[80%] mt-20 mb-20 mx-auto">
                <Link to={`/city/noida/${id}/search`}>
                <p className="w-full text-center py-4 rounded-4xl bg-gray-200 text-2xl">Search for Dishes</p>
                </Link>
            </div>
            <div className="w-[80%] mt-20 mb-20 mx-auto">
                <button className={`text-2xl px-8 py-2 mr-4 border rounded-2xl ${selected==="veg"?"bg-green-600":"bg-gray-300"}`} onClick={()=>setselected(selected==='veg'?null:'veg')}>Veg</button>
                <button className={`text-2xl px-4 py-2 border rounded-2xl ${selected==="nonveg"?"bg-red-500":"bg-gray-300"}`} onClick={()=>setselected(selected==='nonveg'?null:'nonveg')}>Non Veg</button>
               
            </div>
            <div className="w-[80%] mx-auto mt-20">
            {
                RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodselected={selected} ></MenuCard>)
            }

        </div>
        </div>
    )
}
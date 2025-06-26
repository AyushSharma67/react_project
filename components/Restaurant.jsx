import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
export default function Restaurant(){
    const[RestData,setRestData]=useState([]);
    // useEffect(()=>{
    //     async function fetchdata(){
    //         const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    //         const swiggyAPI="https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.6508581&lng=77.37120259999999&carousel=true&third_party_vendor=1"
    //         const response=await fetch(proxyUrl + swiggyAPI);
    //         const data=await response.json();
    //         setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            
            
    //     }
    //     fetchdata();
    // },[])
    useEffect(()=>{
    
     async function fetchData() {
        
        const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
        const response = await fetch(proxyServer+swiggyAPI);
        const data = await response.json();
        setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     }

     fetchData();
    },[])
    if(RestData.length==0){
        return (<Shimmer></Shimmer>)
    }


    // console.log(RestData);
    return(
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            {
                RestData.map((restinfo)=><RestCard key={restinfo?.info?.id} restinfo={restinfo}></RestCard>)

            }


        </div>
    )
}

import { useState } from "react";
import { useParams } from "react-router"

export default function SearchFood(){
    const{id}=useParams();
    const[food,setfood]=useState("");
    return(
        <div className="w-[80%] mx-auto mt-20">
            <input className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border" placeholder="Search here" onChange={(e)=>setfood(e.target.value)}></input>
        </div>
    )

}
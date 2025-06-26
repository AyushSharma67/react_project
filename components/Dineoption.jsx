import { dineoutRestaurants } from "../Utilis/DineData";
import Dinecard from "./Dinecard";
export default function Dineoption(){
    return(
    
        <div className="w-[80%] mb-20 mx-auto mt-20">
            <p className="text-2xl font-bold">Discover best restaurants on Dineout</p>
            <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4">
                {
                    dineoutRestaurants.map((RestData)=><Dinecard key={RestData?.info?.id} RestData={RestData}></Dinecard>)
                }
                {/* <div className="absolute bg-gradient-to-t from-black h-16 bottom-0 left-0 right-0 ">

                </div> */}
            </div>

        </div>
    

    )
}
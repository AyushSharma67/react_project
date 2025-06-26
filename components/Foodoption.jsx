import {imageGridCards} from "../Utilis/FoodData";
import Foodcard from "./Foodcard";
export default function Foodoption(){
    return(
        <>
        <div className="w-[80%] container mx-auto flex flex-wrap gap-3 mt-20">
            {
                imageGridCards.map((foodData)=><Foodcard key={foodData.id} foodData={foodData}></Foodcard>)
            }
        </div>
        </>
    )
}
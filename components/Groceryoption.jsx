import { GroceryGridCard } from "../Utilis/Grocery"
import Grocerycard from "./Grocerycard"
export default function Groceryoption(){
    return(
        <div className="mt-20 w-[80%] container mx-auto">
            <h1 className="text-2xl font-bold">Shop Groceries on Instamart</h1>
            <div className="container mx-auto flex flex-nowrap gap-3 mt-5 overflow-x-auto">
            {
                GroceryGridCard.map((foodData)=><Grocerycard key={foodData.id} foodData={foodData}></Grocerycard>)
            }
            </div>
        </div>
    )
}
import { useState } from "react"
import {addItems,IncrementItems,DecrementItems} from "../Stored/CartSlicer";
import { useDispatch, useSelector } from "react-redux";
export default function RestInfo({restData}){
    // const[count,setcount]=useState(0);
    const dispatch=useDispatch();
    const items=useSelector(state=>state.cartslice.items);
    const element=items.find(item=>item.id===restData.id);
    const count=element?element.quantity:0;
    function handleAdditems(){
        // setcount(1);
        dispatch(addItems(restData));

    }
    function handleIncreItems(){
        // setcount(count+1);
        dispatch(IncrementItems(restData));
    }
    function handleDecreItems(){
        // setcount(count-1);
        dispatch(DecrementItems(restData));
    }
    return(
        <>
        <div className="flex justify-between w-full mb-2 pb-2">
            <div className="w-[70%]">
                <p className="text-2xl text-gray-700 font-semibold mb-1">{restData?.name}</p>
                <p className="text-2xl text-gray-700 font-semibold">{"₹" +("defaultPrice" in restData?restData?.defaultPrice/100:restData?.price/100)}</p>
                <span className="text-green-700">{restData?.ratings?.aggregatedRating?.rating}</span>
                <span>{"("+restData?.ratings?.aggregatedRating?.ratingCount+")"}</span>
                <p>{restData?.description}</p>
                </div>
                <div className="w-[20%] relative h-42">
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData?.imageId} className="w-60 h-36 object-cover rounded-3xl"></img>
                    {
                        count===0?(<button className="absolute bottom-1 bg-white text-green-600 px-6 py-3 shadow-md rounded-xl text-2xl border left-20 " onClick={()=>handleAdditems()}>Add</button>):(
                            <div className="absolute bottom-1 flex gap-3 text-2xl text-green-600 px-6 py-3 shadow-md rounded-2xl border left-20 bg-white">
                                <button className="" onClick={()=>handleDecreItems()}>-</button>
                                <span>{count}</span>
                                <button onClick={()=>handleIncreItems()}>+</button>
                            </div>
                        )
                    }
                </div>
        </div>
        <hr className="mb-6 mt-2"></hr>
        </>
    )

}
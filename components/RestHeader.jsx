import { useSelector } from "react-redux"
import { Link } from "react-router";

export default function RestHeader(){
    const counter=useSelector(state=>state.cartslice.count);
    return(
        <div className="bg-gray-200 text-3xl mx-auto px-8 py-4 container flex justify-between items-center w-[80%]">
            <div>
                <img src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" className="w-40 h-12 bg-[#ff5200]"></img>

            </div>
            <div>
                <p>Cart</p>
            </div>
            <div>
                <Link to="/Checkout">
                <p>Cart{`(${counter})`}</p>
                </Link>
            </div>
        </div>
    )
}
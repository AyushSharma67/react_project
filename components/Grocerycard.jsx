export default function Grocerycard({foodData}){
    return(
        <div className="flex-none">
            <a href={foodData?.action?.link}>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId} className="w-40 h-50 object-cover"></img>
            </a>
            <h1 className="text-center font-bold">{foodData?.action?.text}</h1>
        </div>
    )

}
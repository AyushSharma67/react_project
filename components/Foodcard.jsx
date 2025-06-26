export default function Foodcard({foodData}){
    return(
        <>
        <a href={foodData?.action?.link}>
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId} className="w-40 h-50 object-cover"></img>
        </a>
        </>
    )

}
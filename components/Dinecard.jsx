export default function Dinecard({RestData}){
    return(
        <div className="max-w-sm flex-none">
            <a href={RestData?.cta?.link} target="_blank">
                <div className="relative">
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+RestData?.info?.mediaFiles[0]?.url} className="w-80 h-50 object-cover"></img>
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-0"></div>
                    <p className="absolute bottom-2 left-2 text-xl text-white">{RestData?.info?.name}</p>
                    <p className="absolute bottom-2 right-2 text-xl text-white">{RestData?.info?.rating?.value}</p>
      

                </div>
            </a>
            

        </div>
    )

}
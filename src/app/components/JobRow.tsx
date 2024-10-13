import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function JobRow() {
    return(
        <>
         <div className="bg-amber-500 p-4 rounded-lg shadow-slate-50 shadow-md font-semibold text-gray-100 relative">
         <div className="absolute cursor-pointer top-4 right-4">
          <FontAwesomeIcon className="size-4 text-gray-100" icon={faHeart} />
        </div>
            <div className="flex grow gap-4">
            <div className="content-center">
                <img 
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png" 
                alt="logo" 
                className="size-12"
                />
            </div>
            <div className="grow sm:flex">
            <div className="grow">
                <div className="text-sm">Spotify</div>
                <div className="font-bold mb-1 text-lg">Product Designer</div>
                <div className="text-gray-100 text-xs">
                    Remote &middot; New York, US &middot; Full-time
                </div>
            </div>
            <div className="content-end text-gray-100 text-xs">
                2 hours ago
            </div>
            </div>
            </div> 
         </div>
        </>
    )
}
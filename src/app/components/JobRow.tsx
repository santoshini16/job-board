export default function JobRow() {
    return(
        <>
         <div className="bg-amber-500 p-4 rounded-lg shadow-slate-50 shadow-md flex font-semibold text-gray-100 gap-4"> 
            <div className="content-center">
                <img 
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png" 
                alt="logo" 
                className="size-12"
                />
            </div>
            <div className="grow">
                <div>Spotify</div>
                <div className="font-bold">Product Designer</div>
                <div className="text-gray-100 text-sm">
                    Remote &middot; New York, US &middot; Full-time
                </div>
            </div>
            <div className="content-end text-gray-100 text-sm">
                2 hours ago
            </div>
         </div>
        </>
    )
}
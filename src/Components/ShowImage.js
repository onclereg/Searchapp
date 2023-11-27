
function ShowImage({image}){
    return (
        <div key={image.index} className=" shadow-md rounded-xl m-2 relative ">
            <div>
            <img  src={image.urls.small} alt={image.alt_description} className=" h-[200px] w-[480px] rounded-xl"/>
            </div>
            {/* <div className=" absolute top-1 right-1 text-1xl ">
              {image.description}
            </div> */}
        </div>
    )
};

export default ShowImage;
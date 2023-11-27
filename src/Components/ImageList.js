import ShowImage from "./ShowImage";

function ImageList({images}){

    const renderedImages = images.map((image)=> {
      return  <ShowImage image={image}/>;
    })
  
  return(
    <div className=" flex justify-center items-center mt-8 sm:p-3 ">
      <div className=" grid sm:grid-cols-2 md:grid-cols-5 gap-auto md:max-w-[1015px] justify-center">
         {renderedImages}
      </div>
      </div>
    );
}

export default ImageList;
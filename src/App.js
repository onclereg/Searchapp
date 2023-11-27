
import searchImages from './Components/Api';
import SearchBar from './Components/SearchBar';
import ImageList from './Components/ImageList';
import { useState } from 'react';

function App() {


   const [images,setImages] = useState([]);

   const handleSubmit = async (term) =>{
     const result = await searchImages(term);

     setImages(result);
   }

  return (
    <div className=" flex flex-col bg-black/90 py-8 px-5 md:h-screen w-full">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList  images={images} />
    </div>
  )
};

export default App;

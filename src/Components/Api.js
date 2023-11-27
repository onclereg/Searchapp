import axios from "axios";

const searchImages = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
    headers: {
        Authorization : 'Client-ID h68S_48szq1xpw055Fyv1eWX96TwhyF8Okmpr_xQtwA'
    },
    params:{
        query:term,
    }
   });
   return response.data.results;
};

export default searchImages;
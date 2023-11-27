import { useState } from "react";

function SearchBar({onSubmit}){
    const[term,setTerm] = useState('foods');
    
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        onSubmit(term);
        setTerm('');
    };

    const handleSubmit=(event)=>{
        setTerm(event.target.value);
    };

    return(
        <div className="flex justify-center ">
            <form onSubmit={handleFormSubmit} className=" flex flex-col md:flex-row justify-start items-center">
                <label className=" font-semibold text-2xl text-white px-6">Enter Your Search Term</label>
                <input onChange={handleSubmit} value={term} className=" border-2 outline-none rounded-xl p-2 text-2xl text-black"/>
            </form>
        </div>
    )
};

export default SearchBar;
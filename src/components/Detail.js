import React,{useContext} from "react";
import { Songs } from "../context";
function Detail(){
    const {song} = useContext(Songs);

    return(
        <div className="col-span-1 p-3">
            <h2 className="text-cyan-500 font-bold">Now playing</h2>
            <h2 className="dark:text-white text-zinc-600 text-2xl sm:text-lg lg:text-xl md:text-2xl">{song.name}</h2>
            <div className="w-[300px]  sm:w-[150px] lg:w-[250px] m-auto mt-8 ">
                <img className="w-full rounded-lg " src={song.links.images[0].url} alt="avatar"/>               
            </div>
            <div className="flex justify-evenly items-center mt-8 ">
                <img className="w-[70px] sm:w-[30px] lg:w-[60px] rounded-full"src={song.links.images[1].url} alt="avatar"/>
                <span className="dark:text-white text-zinc-600 text-xl ">{song.author}</span>
            </div>
        </div>
    )
}
export default Detail;
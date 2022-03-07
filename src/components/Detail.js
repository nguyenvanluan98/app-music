import React,{useContext} from "react";
import { Songs } from "../context";
function Detail(){
    const {song} = useContext(Songs);

    return(
        <div className="col-span-1 p-3">
            <h2 className="text-cyan-500 font-bold">Now playing</h2>
            <h2 className="dark:text-white text-zinc-600 text-2xl">{song.name}</h2>
            <div className="w-[300px] md:w-31 lg:w-48 m-auto mt-8">
                <img className="w-full rounded-lg " src={song.links.images[0].url} alt="avatar"/>               
            </div>
            <div className="flex justify-evenly items-center mt-8 ">
                <img className="w-[70px] rounded-full"src={song.links.images[1].url} alt="avatar"/>
                <span className="dark:text-white text-zinc-600 text-xl ">{song.author}</span>
            </div>
        </div>
    )
}
export default Detail;
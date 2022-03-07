import React, {useContext,useEffect,useState } from "react";
import { Songs } from "../context";
function ListSong() {
    const { DataSongs, handelSetSong, song } = useContext(Songs);
    console.log(DataSongs);
    const [idSong, setIdSong] =useState(0);
    const handelPlayer = (idSong) => {
        setIdSong(idSong);
        handelSetSong(idSong);
    };
    useEffect(() => {
        setIdSong(song.id);
    },[song]);
    return (
        <div className="col-span-2 overflow-y-scroll flex-auto sm:table-fixed w-auto h-auto text-justify">
            <table className="table-auto w-full">
                <thead className="dark:text-white text-black h-12">
                    <tr>
                        <th>#</th>
                        <th className="">Title</th>
                        <th className="w[10%]">Author</th>
                        <th className="w[10%]"><i className="fa fa-download"></i></th>

                    </tr>
                </thead>
                <tbody className="sm:shrink-0">
                    {
                        DataSongs.map((song, index) => (
                            <tr key={index } className={`h-12 dark:text-slate-50 text-black dark:bg-violet-500 to-pink-400  dark:hover:bg-violet-600 dark:hover:bg-purple-500 hover:bg-cyan-300  hover:bg-purple-400 ${idSong === song.id && 'dark:bg-purple-300 bg-purple-400 dark:text-teal-500 text-cyan-300'}`}
                            onClick={()=> handelPlayer(song.id)}
                            >
                                <td className="text-center">{index + 1}</td>
                                <td>{song.name}</td>
                                <td className="text-center">{song.author}</td>
                                <td className="text-center"><a href={song.url}>
                                    <i className="fa fa-download"></i>
                                </a>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>

    )
}

export default ListSong;
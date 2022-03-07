import React, { useContext } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from "../context";

function Playing() {
    const { song, handelSetSong } = useContext(Songs);
    const handelClikNetx = () => {
        handelSetSong(song.id + 1); 
    }
    const handelClikPre = () => {
        handelSetSong(song.id - 1);
    }
    return (

        <AudioPlayer className="player-music"
            src={song.url}
            layout="stacked-reverse"
            showSkipControls={true}
            showJumpControls={false}
            onClickNext={handelClikNetx}
            onClickPrevious={handelClikPre}
        />
    )
}
export default Playing;
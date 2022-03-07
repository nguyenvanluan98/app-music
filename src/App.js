import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Detail from './components/Detail';
import ListSong from './components/ListSong';
import Menubar from './components/Menubar';
import { Songs } from './context';
import DataSongs from './data/songs.json';
import Playing from './components/Paying';
import { useState } from 'react';
<link href="/dist/output.css" rel="stylesheet"></link>

function App() {
  const [song, setSong] = useState(DataSongs[0]);
  const handelSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if (!song)
      setSong(DataSongs[0]);
    else
      setSong(song)
  }
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handelSetSong }}>
        <Navbar />
        <div className='grid grid-cols-4 bg-gradient-to-r w-auto dark:from-violet-500 dark:to-fuchsia-500 from-slate-300 to-pink-500 h-screen-navbar-player overflow-hidden'>
          {/*span1*/}
          <Detail />
          {/*span2*/}
          <ListSong />
          {/*span3*/}
          <Menubar />
        </div>
        <Playing />
      </Songs.Provider>
    </div>

  );
}

export default App;

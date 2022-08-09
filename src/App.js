import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongMapper from './Components/SongMapper';
import SearchBar from './Components/SearchBar';
import NewSong from './Components/NewSong';
import './App.css';

function App() {
  
  const [songs, setSongs] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    getAllSongs();
  }, []);
  
  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/music/');
    setSongs(response.data);
  }

  return (
    <div>
      <SearchBar userInput={userInput} setUserInput={setUserInput}/>
      <table className='table table-sm table-hover'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artisit</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Genre</th>
          </tr>
        </thead>
       <SongMapper userInput={userInput} songs={songs}/>
      </table>
      <NewSong getAllSongs={getAllSongs}/>
    </div>
  );
}

export default App;

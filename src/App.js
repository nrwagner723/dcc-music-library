import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongMapper from './Components/SongMapper';
import SearchBar from './Components/SearchBar';
import NewSong from './Components/NewSong';

function App() {
  
  const [songs, setSongs] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [newSong, setNewSong] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);
  
  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/music/');
    console.log(response.data);
    setSongs(response.data);
  }

  useEffect(() => {
    addNewSong();
  }, []);

  async function addNewSong(){
    const response = await axios.post('http://127.0.0.1:8000/music/');
    setNewSong(response.data);
  }

  return (
    <div>
      <SearchBar userInput={userInput} setUserInput={setUserInput} />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artisit</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Genre</th>
            <th>Likes</th>
          </tr>
        </thead>
       <SongMapper userInput={userInput} songs={songs}/>
       <NewSong userInput={userInput} />
      </table>
    </div>
  );
}

export default App;

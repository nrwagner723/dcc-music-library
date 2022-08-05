import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongMapper from './Components/SongMapper';
import SearchBar from './Components/SearchBar';

function App() {
  
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);
  
  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/music/');
    console.log(response.data);
    setSongs(response.data);
  }

  return (
    <div>
      <SearchBar songs={songs}/>
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
       <SongMapper songs={songs}/>
      </table>
    </div>
  );
}

export default App;

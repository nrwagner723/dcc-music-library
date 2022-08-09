import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const NewSong = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    const handleSubmit = async() => {
        const response = await axios.post('http://127.0.0.1:8000/music/', {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre
        })
        props.getAllSongs(response.data);
    }

    return ( 
        <form onSubmit={(e) => handleSubmit(e)} className='search-bar-font form'>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form7Example1">Title</label>
                <input type="text" id="form7Example1" className="form-control" value={title} onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form7Example1">Artist</label>
                <input type="text" id="form7Example1" className="form-control" value={artist} onChange={(event) => setArtist(event.target.value)}/>
            </div>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form7Example1">Album</label>
                <input type="text" id="form7Example1" className="form-control" value={album} onChange={(event) => setAlbum(event.target.value)}/>
            </div>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form7Example1">Release Date</label>
                <input type="text" id="form7Example1" className="form-control" value={release_date} onChange={(event) => setReleaseDate(event.target.value)}/>
            </div>
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form7Example1">Genre</label>
                <input type="text" id="form7Example1" className="form-control" value={genre} onChange={(event) => setGenre(event.target.value)}/>
            </div>
            <button type='submit' className='btn btn-outline-dark'>Add Song</button>
        </form>
     );
}
 
export default NewSong;
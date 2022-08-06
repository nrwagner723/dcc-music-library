import '../App.css';

const NewSong = (userInput) => {

    const axios = require('axios');
    axios.post('http://127.0.0.1:8000/music/', {
        // i know this is all wrong, i just put it in as a placeholder because i dont know how to do this
        title: {userInput},
        artist: {userInput},
        album: {userInput},
        release_date: {userInput},
        genre: {userInput}
    })
    .then(function (response) {
        console.log(response)
    })

    return ( 
        <form className='search-bar-font form'>
            <div class="form-outline mb-4">
                <label class="form-label" for="form7Example1">Title</label>
                <input type="text" id="form7Example1" class="form-control" />
            </div>
            <div class="form-outline mb-4">
                <label class="form-label" for="form7Example1">Artist</label>
                <input type="text" id="form7Example1" class="form-control" />
            </div>
            <div class="form-outline mb-4">
                <label class="form-label" for="form7Example1">Album</label>
                <input type="text" id="form7Example1" class="form-control" />
            </div>
            <div class="form-outline mb-4">
                <label class="form-label" for="form7Example1">Release Date</label>
                <input type="text" id="form7Example1" class="form-control" />
            </div>
            <div class="form-outline mb-4">
                <label class="form-label" for="form7Example1">Genre</label>
                <input type="text" id="form7Example1" class="form-control" />
            </div>
        </form>
     );
}
 
export default NewSong;
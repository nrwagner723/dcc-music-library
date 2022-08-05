import Song from "./Song";

const SongMapper = ({userInput, songs}) => {
    
    return (
        <tbody>
          {songs.filter(el => el.title.toLowerCase().includes(userInput.toLowerCase()) || 
          el.artist.toLowerCase().includes(userInput.toLowerCase()) ||
          el.album.toLowerCase().includes(userInput.toLowerCase()) ||
          el.release_date.toLowerCase().includes(userInput.toLowerCase()) ||
          el.genre.toLowerCase().includes(userInput.toLowerCase() ||
          el.likes.toLowerCase().includes(userInput.toLowerCase() 
          ))).map(el => <tr> <Song song = {el} /> </tr>)}
        </tbody>
    )
}

export default SongMapper;
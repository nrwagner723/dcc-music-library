import Song from "./Song";

const SongMapper = ({userInput, songs}) => {
    
    return (
        <tbody className="table-group-divider table-divider-color">
          {songs[0] && songs.filter(el => el.title.toLowerCase().includes(userInput.toLowerCase()) || 
          el.artist.toLowerCase().includes(userInput.toLowerCase()) ||
          el.album.toLowerCase().includes(userInput.toLowerCase()) ||
          el.release_date.includes(userInput) ||
          el.genre.toLowerCase().includes(userInput.toLowerCase() 
          )).map(el => <tr key={el.id}><Song song = {el}/></tr>)}
        </tbody>
    )
}

export default SongMapper;
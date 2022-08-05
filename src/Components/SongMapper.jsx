import Song from "./Song";

const SongMapper = ({songs}) => {
    
    return (
        <tbody>
          {songs.map(el => <tr> <Song song = {el} /> </tr>)}
        </tbody>
    )
}

export default SongMapper;
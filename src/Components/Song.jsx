const Song = ({song}) => {
    
    return ( 
        <>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.release_date}</td>
            <td>{song.genre}</td>
        </>
     );
}
 
export default Song;
const NewSong = ({userInput, song}) => {
    
    return ( 
        <form>
            <label for='title'>Title:</label>
            <input type='text' id='title' name='title' />

            <label for='artist'>Artist:</label>
            <input type='text' id='artist' name='artist' />

            <label for='album'>Album:</label>
            <input type='text' id='album' name='album' />

            <label for='release_date'>Release Date:</label>
            <input type='text' id='release_date' name='release_date' />

            <label for='genre'>Genre:</label>
            <input type='text' id='genre' name='genre' />
        </form>
     );
}
 
export default NewSong;
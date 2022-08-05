import React, { useState } from 'react';

function SearchBar ({songs}) {
    
    const [filteredSongs, setFilteredSongs] = useState([]);
    
    const handleFilter = (event) => {
        const searchTerm = event.target.value;
        const newFitler = songs.filter((value) => {
            return value.title.toLowerCase().includes(searchTerm.toLowerCase());
        });

        if (searchTerm === '') {
            setFilteredSongs([]);
        } else {
            setFilteredSongs(newFitler);
    }}

    return ( 
        <div className='search'>
            <div className='searchInputs'>
                <input type='text' placeholder='Search' onChange={handleFilter}/>
            </div>
            <div className='dataResults'>
                {filteredSongs.map((value, key) => {
                    return ( 
                        <div> {value.title} </div> 
                     );
                })}
            </div>
        </div>
     );
}
 
export default SearchBar;
import React from 'react';

function SearchBar ({userInput, setUserInput, songs}) {
  
    return ( 
        <div className='search'>
            <div className='searchInputs'>
                <input type='text' placeholder='Search...' value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
            </div>
        </div>
     );
}
 
export default SearchBar;
import React from 'react';
import '../App.css';

function SearchBar ({userInput, setUserInput, songs}) {
  
    return ( 
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <div class="navbar-brand search-bar-font">Music Library</div>
                <form class="d-flex input-group w-auto">
                    <input
                        type="search"
                        class="form-control search-bar-font"
                        placeholder="Search..."
                        aria-label="Search"
                        aria-describedby="search-addon" 
                        value={userInput} onChange={(e) => setUserInput(e.target.value)} />
                </form>
            </div>
        </nav>
     );
}
 
export default SearchBar;
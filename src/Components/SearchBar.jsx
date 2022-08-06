import React from 'react';
import '../App.css';

function SearchBar ({userInput, setUserInput, songs}) {
  
    return ( 
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-brand search-bar-font">Music Library</div>
                <form className="d-flex input-group w-auto">
                    <input
                        type="search"
                        className="form-control search-bar-font"
                        placeholder="Search..."
                        aria-label="Search"
                        aria-describedby="search-addon" 
                        value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
                </form>
            </div>
        </nav>
     );
}
 
export default SearchBar;
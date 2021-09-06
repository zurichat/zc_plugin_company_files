import "./searchBar.css";

function SearchBar() {
    return (
        <section className="nav-bar__search-bar-container">
            <img src="./icons/search-icon.svg" alt="search icon" className="search--icon" />
            <input type="search" 
                    name="search-term"
                    id="search-input"
                    className="search--input" 
                    placeholder="Search for your files" 
                    autoComplete="off" />
            <img src="./icons/search-clear-icon.svg" alt="clear search keyword input" className="search--icon search-clear--icon" />
        </section>
    )
}

export default SearchBar;

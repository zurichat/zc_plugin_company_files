import Search from './asset/Search.svg'
import './Searchbar.css'
function SearchBar() {
    return (
        <div className="search">
            <img className="icon" src={Search} alt="SearchBar" />
            <input type="text" placeholder="Search Files...." />
        </div>
    )
}

export default SearchBar;

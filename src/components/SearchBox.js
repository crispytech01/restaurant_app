
const SearchBox = ({searchField, searchChange}) =>{
    return(
        <div className="pa2">
            <input 
                type="search" 
                className="pa3 "
                placeholder="search" 
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox
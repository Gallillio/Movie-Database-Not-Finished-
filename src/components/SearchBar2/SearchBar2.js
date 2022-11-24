import React, {useState} from 'react'
import './SearchBar.css';
var data = require("./MOCK_DATA.json");

const SearchBar2 = () => {
    
    // hook [searchValue] is value written in search, [setSearchValue] sets whats in the search value
    const [searchValue, setSearchValue] = useState("")
    
    //checks if search is empty boolean
    const shouldDisplayButton = searchValue.length > 0
    console.log(shouldDisplayButton)

    
    const onChange = (event) => {
        setSearchValue(event.target.value);
    }
    

    return(
        <div>
            
            <input type="text" className="SearchBarStyle" placeholder="Search for a movie!" 
                value={searchValue} onChange={onChange}/>

            {/* { 
                //short circuiting (if first argument is faulse, dont do second argument, if first argument is true, do second argument
                shouldDisplayButton && <button className="clear" onClick={() =>{ setSearchValue("")}}> <b>X</b> </button> 
            } */}

            {/* shows the dropdown list */}
            <div className='dropdown'>
                {/* filters */}
                {data.filter(item =>{
                    const searchTerm = searchValue.toLowerCase();
                    const fullName = item.Title.toLowerCase();

                    return searchTerm && fullName.startsWith(searchTerm)
                }).slice(0,3)
                // bey2asem yasta
                .map((item) => (
                    <div className="dropdown-row">
                        <a href={item.Title}>
                            <b>{item.Title}</b>
                            <br/>
                            {item.ReleaseDate}
                            <br/>
                            Rating : {item.IMDB_Rating}
                            </a>
                        <hr/>
                    </div>
                ))}
            </div>
            
        </div>
    ) 
}


export default SearchBar2
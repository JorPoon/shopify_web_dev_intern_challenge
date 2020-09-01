import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

interface Search {
    search: Function
}

const SearchBar = (props:Search) => {

    const [text, setText] = useState<string>("")
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
      };

    return (
        <div>
            <form noValidate autoComplete="on">
                <TextField
                    id="movie"
                    label="Movie"
                    value={text}
                    onChange={handleTextChange}
                /> 
                <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                </IconButton>   
            </form>
        </div>
    )
};

export default SearchBar 
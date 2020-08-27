import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

const SearchBar = () => {

    const [text, setText] = useState("")
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
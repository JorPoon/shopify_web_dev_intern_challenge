import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';


interface Search {
    search: Function
}

const SearchBar = (props:Search) => {

    const [text, setText] = useState<string>("")
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
      };

    return (
        <>
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
        </>
    )
};

export default SearchBar 
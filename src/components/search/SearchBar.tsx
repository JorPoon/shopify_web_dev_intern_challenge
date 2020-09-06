import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';



interface SearchProps {
    search: Function
}

const SearchBar = (props:SearchProps) => {

    const [text, setText] = useState<string>("")
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setText(event.target.value);
      };
    const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        props.search(text)
    }

    return (
        <>
            <form noValidate autoComplete="on" onSubmit={handleSearch}>
                <TextField
                    id="movie"
                    label=" Search Movie"
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
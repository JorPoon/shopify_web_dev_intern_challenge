import React, {useEffect, useState} from 'react'
import NominateCard from '../components/movies/NominateCard'
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';


interface NominatedMovies {
    nominated: any,
    remove: Function
}

const NominationView = (props:NominatedMovies) => {

    const [banner, setBanner] = useState(false)

    const generateKey = (pre:string) => {
        return `${ pre }_${ new Date().getTime() }`;
    }

    useEffect(() => {
        if(props.nominated.length >= 5) {
            setBanner(true)
        } else {
            setBanner(false)
        }
    }, [props.nominated])

    return (
        <>
            {banner && <Chip
                        avatar={<Avatar>5</Avatar>}
                        label="Nominations"
                        color="secondary"
                        />}
            {props.nominated.map((movie: any) => {  
                const id = generateKey(movie.title)      
                return (
                    <NominateCard 
                        key={id}
                        title={movie.title} 
                        year={movie.year} 
                        remove={props.remove}
                        />
                )
            })}
        </>
    )
}




export default NominationView

import React, {useEffect, useState} from 'react'
import NominateCard from '../components/movies/NominateCard'

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
            console.log(5)
            setBanner(true)
        }
    }, [props.nominated])

    return (
        <>
            {banner && <p>hi</p>}
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

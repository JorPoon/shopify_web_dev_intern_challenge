import React from 'react'
import NominateCard from '../components/movies/NominateCard'

interface NominatedMovies {
    nominated: any
}

const NominationView = (props:NominatedMovies) => {

    return (
        <>
            {props.nominated.map((movie: any) => {
                const id = Date.now()
                return (
                    <NominateCard 
                        key={id}
                        title={movie.title} 
                        year={movie.year} 
                        />
                )
            })}
        </>
    )
}




export default NominationView

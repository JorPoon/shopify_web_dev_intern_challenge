import React , { useState, useEffect, useRef } from 'react'


export default function useFetch(url: string) {

    const [response, setResponse] = useState<any>()
    const[error, setError] = useState<any>(null)
    const [isLoading, setIsLoading] =useState<boolean>(false)
    const cache = useRef<any>({})

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)

            try {

                if (cache.current[url]) {

                    const data = cache.current[url]
                    setResponse(data)
                    setIsLoading(false)

                } else {
                    const res = await fetch(url)
                    const data = await res.json()

                    cache.current[url] = data

                    setResponse(data);
                    setIsLoading(false)
                }
            } catch (error) {
                setError(error)
            }   
        };
        fetchData();
    },[url])
    
    return {response, error, isLoading}
}

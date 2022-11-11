import { useState, useEffect, useRef } from "react";

export const useFetch = (options) => {
    const [data, setData] = useState(null);
    const [fetchCount, setFetchCount] = useState(0);
    const {number, url} = options;
    const isNumberGreater = number > fetchCount;
    const ref = useRef(false);

    useEffect(() => {
        console.log("useFetch useEffect");
        if (options.url) {
            fetch(options.url)
            .then(response => response.json())
            .then(json => {
                setData(json);
            });
        }
    }, [options.url])

    // useEffect(() => {
    //     if (isNumberGreater) {
    //         setFetchCount(prevC => prevC + 1);
    //     }
    // }, [isNumberGreater])

    // useEffect(() => {
    //     let ignore = false;
    //     console.log("useEffect runs")
    //         console.log("api call")
    //         fetch("https://catfact.ninja/fact")
    //         .then(response => response.json())
    //         .then(json => {
    //             if (!ignore) {
    //                 console.log("set data")
    //                 setData(json)
    //             }
    //         });
    //     return () => { ignore = true }
    // }, [])
    

    return {
        data,
    };
}
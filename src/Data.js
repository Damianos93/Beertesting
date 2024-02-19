import React, { useState, useEffect } from "react"
const rootUrl = "https://api.punkapi.com/v2/beers"
const randomBeerUrl = "https://api.punkapi.com/v2/beers/random"



const Data = () => {
    // fetch(rootUrl)
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });
    const [beer, setBeer] = useState([])

    useEffect(() => {
        fetch(rootUrl)
            .then(response => response.json())
            .then(data => {
                // const jsonData = JSON.stringify(data);
                setBeer(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <ul>
            {beer.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
}


export default Data
//Imports
import React, { useState, useEffect } from "react"
import axios from "axios"
import "./Data.css"


const rootUrl = "https://api.punkapi.com/v2/beers"
const randomBeerUrl = "https://api.punkapi.com/v2/beers/random"




const Data = () => {
    const [beer, setBeer] = useState([])

    useEffect(() => {
        axios.get(rootUrl)
            .then(response => {
                setBeer(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div id="container">
            <ul>
                {beer.map(item => (
                    <li key={item.id}>
                        <img src={item.image_url}/>
                        <p>{item.name}</p>
                        </li>
                ))}
            </ul>
        </div>
    )
}


export default Data
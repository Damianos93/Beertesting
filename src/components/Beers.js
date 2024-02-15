import {React,useState,useEffect} from "react"

// All beers https://api.punkapi.com/v2/beers


const rootUrl = "https://api.punkapi.com/v2/beers"

function Beers(){
 const [beer,setBeer] = useState()

 useEffect(() => {
    fetch(rootUrl)
      .then(response => response.json())
      .then(data => {
        const jsonData = JSON.stringify(data);
        setBeer(jsonData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
return(
 <>
<p>{beer}</p>
 </>
)

}


export default Beers
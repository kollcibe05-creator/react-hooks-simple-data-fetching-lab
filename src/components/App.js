// create your App component here
import React, {useState, useEffect} from "react";
function App () {
const [image, setImage] = useState(null)
const [isLoading, setLoading]  = useState(true)

useEffect(() => {
    fetch ("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        setImage(data.message)
        setLoading(false)
    })
    
}, [])


return (
    <div>
      {isLoading? <p>Loading...</p> :  
    <img src={image} alt="A Random Dog"/>
      }
    </div>
)

}


export default App;




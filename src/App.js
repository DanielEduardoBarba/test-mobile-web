import { useState } from 'react';
import './App.css';

function App() {
  
const [lat, setLat] = useState(null)
const [lng, setLng] = useState(null)
const [hyper, setHyper] = useState(null)


  return (
    <>
    <button style={{padding:"10px",fontSize:"30px"}} onClick={()=>{
        navigator.geolocation.getCurrentPosition(pos=>{
              setLat(pos.coords.latitude)
              setLng(pos.coords.longitude)
              setHyper(`https://maps.google.com/?q=${pos.coords.latitude},${pos.coords.longitude}`)

                })
    }}>GPS</button>
    <p style={{padding:"10px",fontSize:"30px"}}>{lat}</p>
    <p style={{padding:"10px",fontSize:"30px"}}>{lng}</p>
    <a style={{padding:"10px",fontSize:"30px"}} href={hyper}>Google Maps</a>
    </>
  );
}

export default App;

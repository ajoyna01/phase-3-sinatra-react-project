import React , { useEffect, useState } from 'react'
import IcecreamCard from './IcecreamCard';
import { useHistory } from 'react-router';
import User from './User';

const Home =()=>{
  console.log("Home")

  const[Icecreams, setIcecreams] = useState([]);
    console.log("State of Icecreams[ ", Icecreams, "]")
    


  useEffect( ()=>{

    fetch("http://localhost:9292/home")
    .then(r => r.json())
    .then(fetchedIcecreams =>{ console.log(fetchedIcecreams)
    
      setIcecreams(fetchedIcecreams)

    })

  } , [] )




  return (
    <div className="Home">
      <header className="Home-header">
       
        
        {
          Icecreams.map(eachIcecream =>{ return <IcecreamCard key={eachIcecream.id} IcecreamCardProp={eachIcecream} /> })
        }
        
        
      </header>
    </div>
  );
}


export default Home;
import React, { useState } from 'react';
import { useHistory } from 'react-router';



const IcecreamForm =(props)=> {

//     //const [name, setName] = useState("");
//     const [Icecream, setIcecream] = useState("");


//     const changeName=(event)=>{
//         setName(event.target.value)
//         console.log(event.target.value)
//     }
    
//     const changeContent=(event)=>{ 
//         setContent(event.target.value)
//         console.log(event.target.value)
//     } 

// const history = useHistory();

// const handleSubmit=(event)=>{
//         event.preventDefault(console.log("what's popping"))
        
// let thisIcecreamForm = 
//     {
//           name: name,
//           img: img,
//           ingred: ingred,
//           instruct: instruct,

//     };
    
//     props.addNewIcecream(thisIcecreamForm)

//    fetch("http://localhost:3000/Icecreams", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(thisIcecreamForm),
//     })
//       .then((r) => r.json())
//       .then((newForm) => {props.addNewIcecream(newForm);

//         history.push("/Home");
//  });
// } 
    
  
   
// return (<>
//   <form onSubmit={handleSubmit} className="new-Icecream-form">
//     <div className="form-title"> Add Your Own Icecream </div>
//     <br></br>
//     <input onChange={changeName} value={Icecream-name} placeholder="Name..." />
   
//     <div>
//       <br></br>
//     </div>
//     <input onChange={changeContent} value={Icecream-img} placeholder="Image URL..." />
//     <input onChange={changeContent} value={ingredients} placeholder="Ingredients..." />
//     <input onChange={changeContent} value={instructions} placeholder="Instructions..." />
//     <div></div>
//     <br></br>
//     <input type="submit" value="🌿 Leave a Tip 🌿" />
//   </form>
  

// </>)
}

export default IcecreamForm;

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, div } from "react-bootstrap";

function IcecreamCard( props ){

  function CardDisplay(){
    return (
  <div className="card-columns" >
     <Card style={{ width: '18rem'}} className="card-deck">
      <div className="Icecream card" key={props.eachIcecream.id}>
      </div>
        <div style={{width:'10rem' , height: '8rem'}} className="image" variant="top">
          <img className="pic"src={props.eachIcecream.img}  alt="Icecream" />
        </div>
        <br>
          </br>
          <br>
          </br>
          <br>
          </br>
        <div className="Icecream details">
          <div className="Icecream-name">
            <h3> {props.eachIcecream.name} </h3>
          </div>
          <div className="Icecream-ingredient">  
            <h4> Food:  {props.eachIcecream.ingred}</h4>
          </div> 
          <div className="Icecream-instructions">  
            <h5>Instructions:  {props.eachIcecream.instruct}</h5>
          </div> 
          <br>
          </br>
         </div> 
            {/* <Button variant="primary" className="plant-likes" 
            onClick={clickHandler}> ❤️  Likes {likedPlant}
            </Button>   */}
          <br>
          </br>
            {/* <Button variant="secondary"
            className="favorites" onClick={favoritedPlantClickHandler}
            >
            Favorite🍃 
            </Button>
          <br>
          </br> */}
            <Button variant="secondary" className="create Icecream">Save Your Icecream!</Button>
          <Card.Footer></Card.Footer>
  </Card>
  </div>
    );


  }
return (   
  <div>
    <CardDisplay />
  </div>
  
);
}

export default IcecreamCard;
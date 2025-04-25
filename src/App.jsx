import { useState } from 'react';
import './App.css';
import chef from "./images/DHiraj.PNG";
function Header({ name, year}) { 
  return (
    <header>
      <h1>{ name}'s Kitechen!</h1>
      <p>Copyright: { year }</p>
    </header>
    );
}

const  items = [
  "Chiken Tikka",
  "Chiken do Pyaza",
  "Chilly Chiken",
  "Chiken Curry"
];

const dishObjects = items.map((dish, i ) => ({
  id: i,
  title: dish
}));

function Main({dishes, openStatus, onStatus }) { 
  return (
    <>
      <div>
        <button onClick={() => onStatus(true)}> I want to be Open</button>
        <button onClick={() => onStatus(false)}> I want to be Close</button>
        <h2>Welcome to My Restaurant! it's {""}{ openStatus?"Open" : "Closed" }</h2>
      </div> 
      <main>
        <img 
        src={chef} 
        alt='dhiraj' 
        height= {"200"} 
        />
        <ul>
          {dishes.map((dish)=> (
            <li key={dish.id} style={{ listStyleType : "none"}}>{dish.title}</li>
          ))}
        </ul>
      </main>
    </>

    );
}

function App() {
  const [status, setStatus] = useState(true);

  return (
  <div>
    <h1>The Restaurant is Currently {" "} { status ? "Open":"Closed" }</h1>
    <button onClick={() => setStatus(!status)}> {status ? "Closed":"Open"} Restaurant</button>
  <Header name="Dhiraj" year ={new Date().getFullYear()}/>
  <Main 
  dishes = { dishObjects }
  openStatus = { status }
  onStatus = { setStatus }
   />
  </div>
  );

}

export default App;

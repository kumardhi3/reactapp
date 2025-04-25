import './App.css';
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
  "Chilly Chiken"

];

function Main({dishes}) { 
  return (
      <ul>
        {dishes.map((dish)=> (
          <li style={{ listStyleType : "none"}}>{dish}</li>
        ))}
      </ul>
    );
}

function App() {
  return (
  <div>
  <Header name="Dhiraj" year ={new Date().getFullYear()}/>
    <Main dishes = {items} />
    </div>
  );

}

export default App;

import './App.css';
function Header(props) { 
  return (
    <header>
      <h1>{ props.name}'s Kitechen!</h1>
      <p>Copyright: { props.year }</p>
    </header>
    );

}

function App() {
  return (
  <div>
  <Header name="Dhiraj" year ={new Date().getFullYear()}/>
  <main>
  <h2>Welcome to my kitchen</h2>
  </main>
  </div>
  );

}

export default App;

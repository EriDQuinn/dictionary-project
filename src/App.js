import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.ufRBJfaOH9RPQ6cmXzFTpgHaHa&pid=Api&P=0&w=300&h=300"
            className="App-image"
            alt="peonies"
          />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Erika Díaz</footer>
      </div>
    </div>
  );
}

export default App;

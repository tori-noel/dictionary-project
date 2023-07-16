import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          {" "}
          <img src={logo} alt="logo" className="App-logo" />{" "}
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer>
          <small>
            Coded by Tori Ernst and open-sourced on{" "}
            <a
              href="https://github.com/tori-noel/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;

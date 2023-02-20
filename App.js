/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo.png" className="App-logo" alt="logo" />
    

      </header>
      <main>
        <p>Analyz'ESME est un site qui vous permettera de connaitre la population de votre commune à l'aide de l'âge et du sexe des individus.</p>
        <button className="GET-STARTED-button">Get Started</button>
      </main>
    </div>
  );
}

export default App;
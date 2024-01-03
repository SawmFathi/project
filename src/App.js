import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* add image here */}
        <h1>Welcome to Sam Fathi's Personal Website</h1>
        <p>
          Hello, I'm Sam. This is my personal website.
        </p>
        <p>
          Here you can find information about me, my projects, and more.
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

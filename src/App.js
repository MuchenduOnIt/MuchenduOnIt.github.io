import Background from './animated/animated';
import './index.css';

function App() {
  return (
    <div className="App">
      <Background className="background" />
      <div className="hello">
        Hello there <span className="wave">👋🏾</span> !
      </div>
    </div>
  );
}

export default App;

import Background from './animated/animated';
import Navbar from './components/nav';
import './index.css';

function App() {
  return (
    <div className="App">
      <Background className="background" />
      <Navbar className="navBar"/>
      <div className="hello">
        Hello there <span className="wave">👋🏾</span> !
      </div>
    </div>
  );
}

export default App;

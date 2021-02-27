import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import SplashScreen from './components/SplashScreen';

function App() {

  return (
    <div className="App">
      <SplashScreen />
      <Header />
      <Main />
    </div>
  );
}

export default App;

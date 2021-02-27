import Header from './components/Header';
import Main from './components/Main';
import SplashScreen from './components/SplashScreen';
import './App.sass';

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

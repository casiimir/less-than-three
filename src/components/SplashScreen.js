import './SplashScreen.css';

function SplashScreen() {
  function offSplashScreen() {
    document.querySelector('.SplashScreen').style.opacity = 0;
    document.querySelector('.SplashScreen').style.zIndex = 0;
  }

  return (
    <div className="SplashScreen">
      <h1>SplashScreen!</h1>
      <button onClick={ offSplashScreen }>Load it...</button>
    </div>
  );
}

export default SplashScreen;

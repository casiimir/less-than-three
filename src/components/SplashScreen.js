import './SplashScreen.css';

function SplashScreen() {
  function offSplashScreen() {
    document.querySelector('.SplashScreen').style.opacity = 0;
    document.querySelector('.SplashScreen').style.zIndex = 0;
  }

  return (
    <div className="SplashScreen">
      <div className="SplashScreen--way">        
        <p>Now is no time to think of what you do not have. Think of what you can do with what there is.</p>
        <em>Ernest Hemingway</em></div>
      <h2 className="SplashScreen--title">
        Hi Gamer
      </h2>
      <div className="SplashScreen--text">
        <p>Here you can find <strong>cheap game keys</strong>, under 3$. Let me know if you appreciate it.</p>
        <hr/>
        <p>One last thing - Have fun with whatever make you Happy!</p>
      </div>
      <button onClick={ offSplashScreen }>Load it...</button>
    </div>
  );
}

export default SplashScreen;

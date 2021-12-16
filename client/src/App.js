import Main from './containers/Main';
import './App.css';
import BBCIcon from './media/BBCIcon.png';

function App() {
  return (
    <>
    <body>
      <header>
        <img className='icon' src={BBCIcon}></img> 
        <h1>Countries Top Trumps</h1> 
        </header>
        <Main />
      <video
             autoPlay loop muted style ={{  position: "fixed", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}
            >
          <source src="https://static.videezy.com/system/resources/previews/000/052/735/original/Spinning-globe-on-gray-background.mp4" type="video/mp4"/>
      </video>
    </body>
    </>
  
  )
}

export default App;

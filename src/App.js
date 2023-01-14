import logo from './logo.svg';
import './App.css';
import Welcome from './Compoents/Function';
import Text from './Compoents/ArrowFun';
import Details from './Compoents/ClassFun';
import Food from './Compoents/Props';
import Alert from './Compoents/State';
import Counter from './Compoents/Counter';


function App() {
  return (
    <div className="App">
     <Welcome/>
     <Text/>
     <Details />
     <Food name="Biriyani"/>
     <Food><button>CLICK HERE</button></Food>
     <Food name="Alfham"/>
     <Food name="Sadya"/>
     <Alert/>
     <Counter/>

    </div>
  );
}

export default App;

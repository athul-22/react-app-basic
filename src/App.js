import logo from './logo.svg';
import './App.css';
import Welcome from './Compoents/Function';
import Text from './Compoents/ArrowFun';
import Details from './Compoents/ClassFun';
import Food from './Compoents/Props';
import Alert from './Compoents/State';
import Counter from './Compoents/Counter';
import ParentComponent from './Compoents/ParentComponent'
import ListRendering from './Compoents/ListRendering'
import MultiArray from './Compoents/MultiArray';
import Styling from './Styling/Styling';
import Form from './Compoents/Form'
import RefsDemo from './Compoents/RefsDemo';

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
     <Counter/>
     <Counter/>
    <ParentComponent/>
    <br/>
    <ListRendering/>
    <MultiArray/>
    <Styling/>
    <br>
    </br>
    <Form/>
    <br>
    </br>
    <RefsDemo/>
    </div>

    
  );
}

export default App;

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
import RefsDemo from './Compoents/RefsDemo';
import ApiComponent from './Compoents/ApiComponent';
import HookCounter from './HooksComponent/HookCounter';
import HooksCounter2 from './HooksComponent/HooksCounter2';
import HookInput from './HooksComponent/HookInput';
import HookList from './HooksComponent/HookList';
import HookUseEffect from './HooksComponent/HookUseEffect';

function App() {
  return (
    <div className="App">
    {/* HOOKS*/}
    <HookUseEffect/>
    <HookList/>
      <HooksCounter2/>
      <HookCounter/>
      <HookInput/>
    {/* BEGINEER - INTERMEDIATE */}
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
    <br></br>
    <RefsDemo/>
    <br></br>
    <ApiComponent/>
    </div>
  );
}

export default App;

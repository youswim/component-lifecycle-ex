import logo from './logo.svg';
import './App.css';
import React from 'react'
import LifecycleEx from "./LifecycleEx"

function App() {
  const [is_show, setIsShow] = React.useState(true);
  return (
    <div className="App">
      {is_show? (<LifecycleEx />):null}
      <button onClick={()=>{setIsShow(false);}}>없어져랏</button>
    </div>
  );
}

export default App;

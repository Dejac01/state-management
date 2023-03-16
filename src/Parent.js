import logo from './logo.svg';
import './App.css';
import Child from './components/Child';
import Grandchild from './components/Grandchild';



function App (props) {
  const cheese = "Gouda";

  return (
    <div className="App">

      <Child cheese={cheese}/>
<Grandchild/>
    </div>
  );
}

export default App;

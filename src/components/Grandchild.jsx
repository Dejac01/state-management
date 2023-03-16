import React, {useContext} from 'react'
import Child from './Child'
import CheeseContext from '../context/CheeseContent';

const Grandchild = ({ data }) => {
    const cheeseData = useContext(CheeseContext);
    console.log(cheeseData);
    console.log(data);
    return (
      <div className="grand-child">
        <h1>GrandChild Component</h1>
        <p>My favorite cheese is {cheeseData} cheese</p>
      </div>
    );
  };
export default Grandchild
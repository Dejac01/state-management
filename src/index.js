import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Parent from './Parent';
import CheeseContext from './context/CheeseContent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <CheeseContext.Provider value={'chedder'}>
    <Parent />
    </CheeseContext.Provider>
 
);



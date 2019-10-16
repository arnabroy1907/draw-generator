import React from 'react';
import './App.css';
import Header from './Header';
import Pots from './Pots';
import GroupsSet from './GroupSet';

function App() {
  return (
    <div className = 'app'>
      <Header />
      <div className='content'>
        <Pots />
        <hr/>
        <GroupsSet />
      </div>
    </div>
  );
}

export default App;

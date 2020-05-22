import React from 'react';
import { Map } from 'react-amap';
import './App.css';
const AMAP_KEY = 123
const VERSION = '2222'

function App() {
  return (
    <div className="App">
      <Map amapkey={AMAP_KEY} version={VERSION} />,
    </div>
  );
}

export default App;

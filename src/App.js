import React from 'react';
import DataSocket from './Components/DataSocket/DataSocket';
import './App.css';

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Nationality</th>
            <th>Score</th>
            <th>Sex</th>
          </tr>
        </thead>
        <tbody>
          <DataSocket />        
        </tbody>
      </table>
    </div>
  );
}

export default App;

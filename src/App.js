import React from 'react';
import DataSocket from './Components/DataSocket/DataSocket';
import './App.css';

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Nationality</td>
          <td>Score</td>
          <td>Sex</td>
        </tr>
          <DataSocket />        
      </table>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <AddBox />

    </div>
  );
}

function AddBox() {
  const [color, setColor] = useState('orange');
  const styles = { backgroundColor: color };
  // let test = ['orange', 'teal']
  const [colorList, setColorList] = useState(['orange'])
  return (
    <div>
      <input
        style={styles}
        value={color}
        onChange={(e) => {
          console.log(e.target.value);
          setColor(e.target.value);
        }}
        placeholder='Enter a color' />
      <button onClick={
        () => {
          setColorList([...colorList, color]);
        }
      }>Add Color</button>

      {
        colorList.map(function (item) {
          // console.log(item);
          return <ColorBox key={item} clr={item} />
        })
      }
    </div>

  )
}

function ColorBox({ clr }) {
  const styles = {
    backgroundColor: clr,
    height: '30px',
    width: '250px',
    marginTop: '20px'
  }
  return (
    <div style={styles}></div>
  )

}

export default App;

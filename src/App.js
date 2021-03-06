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
  const [color, setColor] = useState('pink');
  const styles = { backgroundColor: color };
  const [colorList, setColorList] = useState(['teal', 'blue', 'orange'])
  return (
    <div className="container">
      <h1>Colorbox</h1>
      <div className='inputSection'>
        <input
          style={styles}
          value={color}
          onChange={(e) => {
            console.log(e.target.value);
            setColor(e.target.value);
          }}
          placeholder='Enter a color' /> <br />
        <button onClick={
          () => {
            setColorList([...colorList, color]);
          }
        }>Add Color</button>
      </div>
      {
        colorList.map(function (item, id) {
          // console.log(item, id);
          return <ColorBox key={id} clr={item} />
        })
      }
    </div>

  )
}

function ColorBox({ clr }) {
  const styles = {
    backgroundColor: clr,
    height: '25px',
    width: '93%',
    margin: '10px auto 0 auto'
  }
  return (
    <div style={styles}></div>
  )

}

export default App;

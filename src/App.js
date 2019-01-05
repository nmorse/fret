import React, { useState } from "react";
// import { ReactDOM } from "react-dom";
import "./App.css";
import Selector from "./Selector";

function Fret({ note, hilight, onClick }) {
  const style = () => ({
    backgroundColor: (hilight ? "#22DD88" : "#FFFFFF")
  });
  return (
    <td onClick={onClick} className="fret" style={style()} >
      {note}
    </td>
  );
}

function String({ open_string_i, index, frets, hilightScale }) {
  //const [state, setState] = useState({fret:0});
  // const barDown = e => {setState({fret: i})};
  const fretsLen = frets.length;
  const note = i => {
    const ref_i = (i + open_string_i) % 12;
    const notes = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'B♭', 'B'];
    return notes[ref_i];
  };
  const hilight = (ind) => {
    const scales = [[0, 2, 4, 5, 7, 9, 11], 
                    [0, 2, 3, 5, 7, 8, 10], [0, 2, 4, 7, 9]]
    const i = (ind + open_string_i + hilightScale[0] + 5) % 12;
    const s = scales[hilightScale[1]];
    return (s.filter(e => (e === i)).length);
  };
  return (
    <tr className="string" >
      {frets.map((i) => (<Fret note={note(i)} hilight={hilight(i)} key={index * fretsLen + i} />))}
    </tr>
  );
}


function App() {
  const [state, setState] = useState([0, 0, '']);

  // const inst = {"strings":["G", "B", "D", "g", "b", "d"]};
  const inst2 = { "strings": [7, 11, 2, 7, 11, 2] };
  const frets = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  const keyTranslation = {
    "G": 0,
    "G♯": -1,
    "A": -2,
    "B♭": -3,
    "B": -4,
    "C": -5,
    "C♯": -6,
    "D": -7,
    "D♯": -8,
    "E": -9,
    "F": -10,
    "F♯": -11
  };
  const keys = Object.keys(keyTranslation);
  const setKey = (v) => {
    let newState = [...state];
    newState[0] = keyTranslation[v];
    setState(newState);
  };

  const modeTranslation = {"major":0, "minor":1, "pentatonic":2};
  const modes = Object.keys(modeTranslation);
  const setMode = (m) => {
    let newState = [...state];
    newState[1] = modeTranslation[m];
    setState(newState);
  };

  return (
    <div className="app">
      <Selector list={keys} onSelected={setKey} />
      <Selector list={modes} onSelected={setMode} />
      <table>
        <thead>
          <tr>
            {frets.map((f, i) => <th key={i}>{f}</th>)}
          </tr>
        </thead>
        <tbody>

          {inst2.strings.reverse().map((s_i, index) => (
            <String
              key={index} id={index}
              index={index}
              frets={frets}
              open_string_i={s_i}
              hilightScale={state}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

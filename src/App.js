import React, { useState } from "react";
// import { ReactDOM } from "react-dom";
import "./App.css";
import Selector from "./Selector";
import Fret from "./Fret";

function String({ open_string_i, index, frets, hilightScale, noteClicked }) {
  //const [state, setState] = useState({fret:0});
  // const barDown = e => {setState({fret: i})};
  const fretsLen = frets.length;
  const note_i = i => (i + open_string_i) % 12;
  const hilight = (ind) => {
    const scales = [[0, 2, 4, 5, 7, 9, 11], 
                    [0, 2, 3, 5, 7, 8, 10], 
                    [0, 2, 4, 7, 9]]
    const i = (ind + open_string_i + hilightScale.keyIndex + 5 + 12) % 12;
    const s = scales[hilightScale.modeIndex];

    return (s.filter(e => (e === i)).length);
  };
  return (
    <tr className="string" >
      {frets.map((i) => (<Fret 
          onClick={noteClicked} 
          note_i={note_i(i)}
          noteHiLite={hilightScale.noteSeq[0] === note_i(i)} 
          hilight={hilight(i)} 
          key={index * fretsLen + i} />))}
    </tr>
  );
}


function App() {
  const [state, setState] = useState({keyIndex:0, modeIndex:0, noteSeq:[]});
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
  const setKey = (v) => setState({...state, keyIndex: keyTranslation[v]});

  const modeTranslation = {"major":0, "minor":1, "pentatonic":2};
  const modes = Object.keys(modeTranslation);
  const setMode = (m) => setState({...state, modeIndex: modeTranslation[m]});

  const noteClicked = (note_i) => setState({...state, noteSeq: [note_i]});

  return (
    <div className="app">
      <Selector options={keys} inital={'G'} onSelected={setKey} />
      <Selector options={modes} inital={''} onSelected={setMode} />
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
              noteClicked={noteClicked}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

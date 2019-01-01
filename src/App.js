import React from "react";
// import { ReactDOM } from "react-dom";
import "./App.css";

function Fret({ note, hilight }) {
  const style = () => ({
    "background-color": (hilight ? "#22DD88" : "#FFFFFF")
  });
  return (
    <td className="fret" style={style()} >
      {note}
    </td>
  );
}

function String({ open_string_i, index, hilightScale }) {
  //const [state, setState] = useState({fret:0});
  // const barDown = e => {setState({fret: i})};
  const note = i => {
    const ref_i = (i + open_string_i) % 12;
    const notes = ['c ', 'c#', 'd ', 'd#', 'e ', 'f ', 'f#', 'g ', 'g#', 'a ', 'a#', 'b '];
    return notes[ref_i];
  };
  const scales = [[0,2,4,5,7,9,11],[0,2,3,5,7,9,11], [0,4,7,9]]
  const hilight = ind => {
    const i = (ind+open_string_i+hilightScale[0]+5)%12;
    const s = scales[hilightScale[1]];
    return (s.filter(e => (e === i)).length); 
  };
  const frets = [0,1,2,3,4,5,6,7,8,9,10,11] //,12,13,14,15];
  return (
      <tr className="string" >
      {frets.map( (i) => (<Fret note={note(i)} hilight={hilight(i)} id={index*6+i} key={index*6+i} />))}
      </tr>
  );
}


function App() {

//    const inst = {"strings":["G", "B", "D", "g", "b", "d"]};
    const inst2 = {"strings":[7, 11, 2, 7, 11, 2]};
    //const [pl] = useState([
    //    "this", "is", "a"  // , ["list", "of", "words"]
    //]);

    return (
      <div>
        {/* <ScaleSelector onSelection={setScale} />  */}
        <table className="app">
            <tbody className="pounce-phrase-row row-container">
                {inst2.strings.reverse().map((s_i, index) => (
                    <String
                      key={index} id={index}
                      index={index}
                      open_string_i={s_i}
                      hilightScale={[0*-1,]}
                    />
                ))}
            </tbody>
        </table>
      </div>
    );
}

export default App;

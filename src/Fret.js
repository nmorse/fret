import React from "react"
import Color from 'color';

function Fret({ note_i, hilight, noteHiLite, onClick }) {
  let color = Color('rgb(255, 255, 255)');
  color = hilight ? color.darken(0.3) : color;
  color = noteHiLite ? Color('red').darken(0.5) : color;
  const notes = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'B♭', 'B'];
  // const opacity = noteHiLite ? "1.0" : "0.8";
  // const sColor = noteHiLite ? "120" : "250";
  // const color = hilight ? "rgba( 150, 50, " + sColor + ", " + opacity + ")" :
  //   "rgba( 250, 250, " + sColor + ", " + opacity + ")";
  const style = () => ({
    backgroundColor: color
  });
  const handleClick = () => onClick(note_i);
  return (
    <td onClick={handleClick} className="fret" style={style()} >
      {notes[note_i]}
    </td>
  );
}

export default Fret;
import React from "react"
import Color from 'color';

function Fret({ note_i, hilight, noteHiLite, onClick }) {
  let color = Color('rgb(255, 255, 255)');
  color = hilight ? color.darken(0.3) : color;
  color = noteHiLite ? Color('purple').rotate(-90).lighten(0.4).mix(color, 0.7) : color;
  const notes = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'B♭', 'B'];
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
import React from "react"

function Fret({ note_i, hilight, noteHiLite, onClick }) {
    const notes = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'B♭', 'B'];
    const opacity = noteHiLite ? "1.0": "0.8";
    const red = noteHiLite ? "120": "250";
    const color = hilight ? "rgba("+red+", 50, 150, " + opacity + ")" :
    "rgba("+red+", 250, 250, " + opacity + ")";
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
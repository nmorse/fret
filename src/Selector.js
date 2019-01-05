import React, { useState } from "react"

function Selector({ options, inital, onSelected }) {
    const [value, setState] = useState(inital);
    const onChange = (e) => {
        e.preventDefault();
        setState(e.target.value); 
        onSelected(e.target.value);
    };
    return (
        <select value={value} onChange={onChange}>
            {options.map((val, index) => (
                <option value={val} key={index} >{val}</option>))}
        </select>
    );
}

export default Selector;

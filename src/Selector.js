import React, { useState } from "react"

function Selector({ list, onSelected }) {
    const [value, setState] = useState('G');
    const onChange = (e) => {
        e.preventDefault();
        setState(e.target.value); 
        onSelected(e.target.value);
    };
    return (
        <select value={value} onChange={onChange}>
            {list.map((val) => (
                <option value={val} >{val}
                </option>))}
        </select>
    );
}
export default Selector;

// class FlavSelector extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: 'coconut'};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('Your favorite flavor is: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Pick your favorite flavor:
//             <select value={this.state.value} onChange={this.handleChange}>
//               <option value="grapefruit">Grapefruit</option>
//               <option value="lime">Lime</option>
//               <option value="coconut">Coconut</option>
//               <option value="mango">Mango</option>
//             </select>
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }
  
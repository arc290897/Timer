import React from 'react';

const Inputfield = ({value,onChange,onClick,reset}) =>{
	return(
		<div>
			<input onChange={onChange} type="date" placeholder="Enter Your time" value={value}/>
			<button onClick={onClick}>Start Timer</button>
			<button onClick={reset}>Reset</button>
		</div>
		)
}

export default Inputfield;
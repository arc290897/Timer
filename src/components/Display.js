import React from 'react';


const Display = ({date,currTime}) =>{
	return(
		<div>
			<h1>Timer</h1>
			<div className="input-display">
			    <div>{date}</div>
			</div>
			<div className="input-display time-left">
			    <div>{currTime}</div>
			</div>
		</div>
		)
}

export default Display;
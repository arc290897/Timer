import React from 'react';
import './App.css';
import Display from '../components/Display';
import Inputfield from '../components/Inputfield';

class App extends React.Component{
	constructor(){
		super();
		this.state={
			date:"",
			currTime:"Time Left",
		}
	}

	storeDate = (e) =>{
		this.setState({date:e.target.value});
	}

	timeCal = () =>{
		if(this.state.date === ""){
			alert("enter date");
			return;
		}

		let mytime=setInterval(()=>{
			let a= new Date(this.state.date)-new Date();
			if(a<0 || a===0){
				clearInterval(mytime);
				this.setState({currTime:"Dead line reached"});
				return;
			}
			//conversion of a to days hour and second;
			const days=Math.floor(a/(24*60*60*1000));
			const daysms=a % (24*60*60*1000);
			const hours=Math.floor(daysms/(60*60*1000));
			const hoursms=a % (60*60*1000);
			const minutes=Math.floor(hoursms / (60*1000));
			const minutesms=a % (60*1000);
			const sec=Math.floor(minutesms/1000);
			this.setState({currTime:(days+" days :"+hours+" hour :"+minutes+" minutes :"+sec+" seconds left")});
		},500);
	}

	reset = () =>{
		window.location.reload();
	}


	render(){
		return(
		    <div>
		    	<Display date={this.state.date} currTime={this.state.currTime}/>
			    <Inputfield value={this.state.date} onChange={this.storeDate} onClick={this.timeCal} reset={this.reset}/>
		    </div>
  		)
	}
}

export default App;
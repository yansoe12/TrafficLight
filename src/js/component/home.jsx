import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const  [ Red ,SetRed ] = useState("none");
	const [Yellow , SetYellow] =useState("none");
	const [Green , SetGreen]=useState("none");

	const TrunRed=()=>{
		if( Red == "none"){
			SetRed("5px 10px 18px 18px white");
			SetGreen("none");
			SetYellow("none");
		}else{
			SetRed("none")
		}
	}

	const TrunYellow=()=>{
		if( Yellow == "none"){
			SetYellow("5px 10px 18px 18px white");
			SetRed("none");
			SetGreen("none");
		}else{
			SetYellow("none")
		}
	}

	const TrunGreen=()=>{
		if( Green == "none"){
			SetGreen("5px 10px 18px 18px white");
			SetYellow("none");
			SetRed("none");
		}else{
			SetGreen("none")
		}
	}

	return (
    
		<div className="container bg-dark " id="container-principal" style={{width: "4em", height: "9em"}}>
				 
			  <div className="rounded-circle bg-danger mt-2 pt-1 mb-1" onClick= {()=> TrunRed()} style={{boxShadow: Red, height: "30%", width: "110%"}}></div>
			  <div className="rounded-circle bg-warning mb-1" onClick= {()=>  TrunYellow()} style={{boxShadow: Yellow, height: "30%", width: "110%"}}></div>
			  <div className="rounded-circle bg-success" onClick= {()=> TrunGreen()} style={{boxShadow: Green, height: "30%", width: "110%"}}></div>
				   
		</div>
	  );
	
};

export default Home;

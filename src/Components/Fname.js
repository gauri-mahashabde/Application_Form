import React,{useState} from "react";

  

function Fname() {
  function firstName(e){
    console.log(e.target.value);
  }

  

  
  return (
    <>
      <input className="fname" type="text" name="Fname" placeholder="First Name" onChange={firstName}/>
      <input className="lname" type="text" name="Lname" placeholder="Last Name" onChange={firstName}/>
      
    </>
  );
}

export default Fname;
  
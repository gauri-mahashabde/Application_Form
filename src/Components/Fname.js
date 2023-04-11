import React,{useState} from "react";

  

function Fname() {

  const [fname, setFname] = useState( "");
  const [lname, setLname] = useState( "");

  function firstName(e){

    console.log(e.target.value);
    setFname(e.target.value);
  }

  function lastName(e){

    console.log(e.target.value);
    setLname(e.target.value);

  }


  
  return (
    <>
      <input className="fname" type="text" name="Fname" placeholder="First Name"  required onChange={firstName}/>
      <input className="lname" type="text" name="Lname" placeholder="Last Name" onChange={lastName}/>
      
    </>
  );
}

export default Fname;
  
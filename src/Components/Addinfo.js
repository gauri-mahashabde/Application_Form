import React from "react";

export default function Addinfo() {
 
  function changeInfo(e){
    console.log(e.target.value);  }
  return (
    <div>
      <input className="info"  type="text" name="addinfo" placeholder="Additional info" onChange={changeInfo} />
    </div>
  );
}

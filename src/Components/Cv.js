import React from "react";

function Cv() {
  function changeFile(e){
    console.log(e.target.value);
  }
  return (
    <div>
      <input className="Cv" type="file" name="Cv" placeholder="Cvs" onSelect={changeFile} />
    </div>
  );
}

export default Cv;

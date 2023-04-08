import React from "react";

function City() {
  function changeCity(e){
    console.log(e.target.value);
  }
  return (
    <div>
      <input className="city" type="text" name="city" placeholder="city" onChange={changeCity} />
    </div>
  );
}

export default City;

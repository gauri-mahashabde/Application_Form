import React from "react";

function Phone() {
  function changeNumber(e){
    console.log(e.target.value);
  }
  return (
    <div>
      <input className="phone" type="text" name="Phone" placeholder="Phone Number"onChange={changeNumber} />
      <input className="email" type="email" name="email" placeholder="email" onChange={changeNumber } />
    </div>
  );
}

export default Phone;

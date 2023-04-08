import React from "react";

function Address() {
  function changeAdd(e){
    console.log(e.target.value);
  }
  return (
    <div>
      <input className="add" type="text" name="address" placeholder="Address" onChange={changeAdd}/>
    </div>
  );
}

export default Address;

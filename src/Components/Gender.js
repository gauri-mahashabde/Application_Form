import React from 'react'

function Gender() {
  function changeGender(e){
    console.log(e.target.value);
  }
  return (
    <div className="gender1">
          <input className="gender" type="radio" name="Gender" onSelect={changeGender}/>Female
          <input className="gender" type="radio" name="Gender" onSelect={changeGender}/>Male
        </div>
  )
}

export default Gender;
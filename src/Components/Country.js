import React from 'react'

function Country() {
  function changecountry(e){
    console.log(e.value.target);
  }
  return (
    <div>
     <select className="country" type="text" placeholder="Select country" onChange={changecountry}>
            <option value="Australia">Australia</option>
            <option value="India">India</option>
            <option value="Russia">Russia</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Iran">Iran</option>
            <option value="Iraq">Iraq</option></select>
        </div>
  )
}

export default Country;
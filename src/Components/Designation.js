import React from 'react'

function Designation() {
  return (
    <div><select
    className="position"
    type="text"
    placeholder="choose desired Position"
  >
    <option value="Software Engineer">Software Engineer</option>
    <option value="SDE">SDE</option>
    <option value="Frontend Developer">Frontend Developer</option>
    <option value="Backend Developer">Backend Developer</option>
    <option value="Full Stack developer">
      FullStack Developer
    </option></select></div>
  )
}

export default Designation;
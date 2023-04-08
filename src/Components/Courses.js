import React from 'react'

function Courses() {
  function changeCourses(e){
    console.log(e.target.value);
  }
  return (
    <div><div className="options" onChange={changeCourses}>
    Select courses<br/>
    <input type="checkbox" name="course1" value="HTML"/>HTML<br/>
    <input type="checkbox" name="course2" value="CSS"/>CSS<br/>
    <input type="checkbox" name="course3" value="Javascript"/>Javascript<br/>
    <input type="checkbox" name="course4" value="React Js"/>React Js<br/>
    <input type="checkbox" name="course5" value="Node Js"/>Node Js<br/>
    <input type="checkbox" name="course6" value="MongoDB"/>MongoDB<br/>
    <input type="checkbox" name="course7" value="Mysql"/>Mysql<br/>
    <input type="checkbox" name="course8" value="Java"/>Java<br/>
    <input type="checkbox" name="course6" value="PHP"/>PHP</div></div>
  )
}

export default Courses;
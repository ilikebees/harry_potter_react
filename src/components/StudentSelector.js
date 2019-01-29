import React from 'react';

const StudentSelector = (props) => {
  const options = props.students.map((student, index) => {
    return <option value={index} key={index}>{student.name}</option>
  })

  function handleChange(event) {
    props.onStudentSelected(event.target.value);
  }

  return (
    <select id="country-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a student...</option>
      {options}
    </select>
  )
}

export default StudentSelector;

import React from 'react';
import StudentSelector from '../components/StudentSelector';
import StudentDetail from '../components/StudentDetail';

class StudentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      currentStudent: null
    };
    this.handleStudentSelected = this.handleStudentSelected.bind(this);
  }

  componentDidMount() {
    const url = 'http://hp-api.herokuapp.com/api/characters' //define url
    const request = new XMLHttpRequest(); //configure request
    request.open('GET', url);

    //add event listener, in this case, once the request has 'loaded' i.e. responded
    request.addEventListener("load", () => {
      const jsonString = request.responseText;
      const students = JSON.parse(jsonString)

      this.setState({ students: students });
    });

    request.send();
  }

  handleStudentSelected(index) {
    const selectedStudent = this.state.students[index];
    this.setState({ currentStudent: selectedStudent })
  }

  render() {
    return (
      <div>
        <h2>Student Container</h2>
        <StudentSelector students={this.state.students} onStudentSelected={this.handleStudentSelected} />
        <StudentDetail student={this.state.currentStudent} />
      </div>
    );
  }
}

export default StudentContainer;


// 1. Diagram the component structure
// 2. Diagram how data is distributed between the components
// 3. Where is Student selected?
// 4. Draw and explain the data flow that happens when a Student is selected?

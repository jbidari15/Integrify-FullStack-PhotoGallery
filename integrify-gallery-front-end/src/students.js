import React, { Component } from "react";
import SingleStudent from "./singleStudent";
import AddStudent from "./AddStudent.js";
const ApiUrl = "/integrify/students";

class Students extends Component {
  constructor(props) {
    super(props);

    this.state = { students: [] };
  }

  componentDidMount() {
    this.loadStudents();
  }
  loadStudents() {
    fetch(ApiUrl)
      .then(res => res.json())
      .then(myJson => this.setState({ students: myJson }));
  }

  render() {
    const allStudents = this.state.students.map(eachStudent => (
      <SingleStudent key={eachStudent._id} eachStudent={eachStudent} />
    ));
    return (
      <div>
        <div className="Container">{allStudents}</div>
        <AddStudent />
      </div>
    );
  }
}

export default Students;

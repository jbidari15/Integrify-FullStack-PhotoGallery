import React, { Component } from "react";
import SingleStudent from "./singleStudent";
import "./App.css";
import NavBar from "./navbar";
import AddStudent from "./AddStudent";
import AllStudents from "./allStudents";
import { Route, Switch, Redirect } from "react-router-dom";
import ShowStudentDetail from "./showStudentDetail";

const ApiUrl = "/integrify/students";

class Students extends Component {
  constructor(props) {
    super(props);

    this.state = { students: [], specificStudent: 0 };
  }

  componentDidMount() {
    this.loadStudents();
  }
  loadStudents() {
    fetch(ApiUrl)
      .then(res => res.json())
      .then(myJson => this.setState({ students: myJson }));
  }

  addStudent = val => {
    const formData = new FormData();
    for (let item in val) {
      console.log(item, val[item]);

      formData.append(item, val[item]);
    }

    fetch(ApiUrl, {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(data => this.setState({ students: [...this.state.students, data] }))
      .catch(error => console.error("Error:", error))
      .then(response => ("Success:", response));
  };

  render() {
    const allStudents = this.state.students.map(eachStudent => (
      <SingleStudent
        key={eachStudent._id}
        eachStudent={eachStudent}
        findStudent={this.findStudent}
      />
    ));
    return (
      <div className="mainComponent">
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/integrify/students" />}
          />
          <Route
            exact
            path="/integrify/students"
            render={() => <AllStudents allStudents={allStudents} />}
          />
          <Route
            path="/integrify/students/new"
            render={props => (
              <AddStudent addStudent={this.addStudent} {...props} />
            )}
          />
          <Route
            path="/integrify/students/:firstName/:id"
            render={props => (
              <ShowStudentDetail {...props} students={this.state.students} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Students;

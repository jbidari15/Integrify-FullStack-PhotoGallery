import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ShowStudentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { student: "", skills: [] };
  }
  componentWillMount() {
    this.findStudent();
  }
  findStudent = () => {
    const paramId = this.props.match.params.id;
    const foundStudent = this.props.students.find(student => {
      return student._id === paramId;
    });
    this.setState({ student: foundStudent });
  };
  handleRightClick = () => {
    const index = this.props.students
      .map(eachStudent => eachStudent._id)
      .indexOf(this.state.student._id);
    let newIndex = index + 1;
    // console.log(this.props.students[newIndex]._id);
    if (newIndex < this.props.students.length) {
      let nextStudent = this.props.students[newIndex];
      let nextStudentFirstName = nextStudent.firstName;
      let nextStudentId = nextStudent._id;
      this.setState({ student: this.props.students[newIndex] });
      this.props.history.push(
        `/integrify/students/${nextStudentFirstName}/${nextStudentId}`
      );
    } else {
      let newIndex = 0;
      let nextStudent = this.props.students[newIndex];
      let nextStudentFirstName = nextStudent.firstName;
      let nextStudentId = nextStudent._id;
      this.setState({ student: this.props.students[newIndex] });
      this.props.history.push(
        `/integrify/students/${nextStudentFirstName}/${nextStudentId}`
      );
    }
  };
  handleLeftClick = () => {
    const index = this.props.students
      .map(eachStudent => eachStudent._id)
      .indexOf(this.state.student._id);
    let newIndex = index - 1;
    if (newIndex >= 0) {
      let nextStudent = this.props.students[newIndex];
      let nextStudentFirstName = nextStudent.firstName;
      let nextStudentId = nextStudent._id;
      this.setState({ student: this.props.students[newIndex] });
      this.props.history.push(
        `/integrify/students/${nextStudentFirstName}/${nextStudentId}`
      );
    } else {
      let newIndex = this.props.students.length - 1;
      let nextStudent = this.props.students[newIndex];
      let nextStudentFirstName = nextStudent.firstName;
      let nextStudentId = nextStudent._id;
      this.setState({ student: this.props.students[newIndex] });
      this.props.history.push(
        `/integrify/students/${nextStudentFirstName}/${nextStudentId}`
      );
    }
  };

  render() {
    const {
      firstName,
      lastName,
      title,
      nationality,
      src,
      skills,
      whySoftwareDeveloper,
      longTermVision,
      motivatesMe,
      favoriteQuote,
      joinedOn,
      _id
    } = this.state.student;

    const skillsArray = skills.map((skill, i) => <li key={i}>{skill}</li>);
    return (
      <div id="myModal" className="modalDiv">
        <Link to="/">
          <div className="close">
            <span>×</span>
          </div>
        </Link>

        <div className="img-detail-wrapper">
          <div onClick={this.handleRightClick} className="right-button">
            <i className="fas fa-arrow-right" />
          </div>

          <div onClick={this.handleLeftClick} className="left-button">
            <i className="fas fa-arrow-left" />
          </div>

          <img src={src} alt={firstName} className="modal-content" />
          <div className="details">
            <h4>
              Name: <span id="name">{`${firstName} ${lastName}`}</span>
            </h4>
            <h4>
              Title:<span id="title">{title}</span>
            </h4>
            <h4>
              Nationality:<span id="nationality">{nationality}</span>
            </h4>
            <h4>
              Skills:<span id="skills">{skillsArray}</span>
            </h4>
            <h4>
              Why SW developer:<span id="why-sw">{whySoftwareDeveloper}</span>
            </h4>
            <h4>
              Long term vision: <span id="long-term">{longTermVision}</span>
            </h4>
            <h4>
              What motivates me:<span id="motivation">{motivatesMe}</span>
            </h4>
            <h4>
              Favorite quote:<span id="quote">{favoriteQuote}</span>
            </h4>
            <h4>
              Join date:<span id="join">{joinedOn}</span>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
export default ShowStudentDetail;

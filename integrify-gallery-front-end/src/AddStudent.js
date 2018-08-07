import React, { Component } from "react";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col
} from "reactstrap";

class AddStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      title: "",
      nationality: "",
      src: null,
      alt: "",
      skills: "",
      whySoftwareDeveloper: "",
      longTermVision: "",
      motivatesMe: "",
      favoriteQuote: "",
      joinedOn: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addStudent(this.state);
    e.target.reset();
    this.props.history.push("/");
  };

  fileHandler = e => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  render() {
    return (
      <div className="formDiv">
        <Form className="manageForm" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="firstName">First Name</Label>

            <Input
              type="text"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>

            <Input
              type="text"
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="title">Title </Label>

            <Input
              type="text"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="nationality">Nationality </Label>

            <Input
              type="text"
              id="nationality"
              name="nationality"
              value={this.state.nationality}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="src">File </Label>

            <Input
              type="file"
              id="src"
              name="src"
              placeholder="Image"
              onChange={this.fileHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="skills">Skills</Label>
            <Input
              id="skills"
              type="textarea"
              name="skills"
              cols="10"
              rows="3"
              value={this.state.skills}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="whySoftwareDeveloper">
              Why do you want to be software Developer?
            </Label>
            <Input
              id="whySoftwareDeveloper"
              type="textarea"
              name="whySoftwareDeveloper"
              cols="30"
              rows="10"
              value={this.state.whySoftwareDeveloper}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="longTermVision">What are your long term visions?</Label>

            <Input
              id="longTermVision"
              type="textarea"
              name="longTermVision"
              cols="10"
              rows="3"
              value={this.state.longTermVision}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="motivatesMe">What motivates you the most?</Label>

            <Input
              id="motivatesMe"
              type="textarea"
              name="motivatesMe"
              cols="10"
              rows="3"
              value={this.state.motivatesMe}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="favoriteQuote">Your Favourite quote</Label>

            <Input
              id="favoriteQuote"
              type="textarea"
              name="favoriteQuote"
              cols="10"
              rows="3"
              value={this.state.favoriteQuote}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="joinedOn">Joined Date</Label>

            <Input
              id="joinedOn"
              type="textarea"
              name="joinedOn"
              value={this.state.joinedOn}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button className="submitButton">Submit</Button>{" "}
        </Form>
      </div>
    );
  }
}

export default AddStudent;

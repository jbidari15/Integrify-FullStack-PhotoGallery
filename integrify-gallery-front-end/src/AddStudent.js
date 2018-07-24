import React, { Component } from "react";

class AddStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      title: "",
      nationality: "",
      src: "",
      alt: "",
      skills: [],
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
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div>Add Student here</div>
        <form className="manageForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="nationality"
            placeholder="Nationality"
            value={this.state.nationality}
            onChange={this.handleChange}
          />
          <input
            type="file"
            name="src"
            placeholder="Image"
            value={this.state.src}
            onChange={this.handleChange}
          />
          <textarea
            name="skills"
            cols="10"
            rows="3"
            placeholder="What are your skills?"
            value={this.state.skills}
            onChange={this.handleChange}
          />
          <textarea
            name="whySoftwareDeveloper"
            cols="30"
            rows="10"
            placeholder="Why do you want to be software Developer"
            value={this.state.whySoftwareDeveloper}
            onChange={this.handleChange}
          />
          <textarea
            name="longTermVision"
            cols="10"
            rows="3"
            placeholder="What are your long term visions?"
            value={this.state.longTermVision}
            onChange={this.handleChange}
          />
          <textarea
            name="motivatesMe"
            cols="10"
            rows="3"
            placeholder="What motivates you the most?"
            value={this.state.motivatesMe}
            onChange={this.handleChange}
          />
          <textarea
            name="favoriteQuote"
            cols="10"
            rows="3"
            placeholder="Your Favourite Quote"
            value={this.state.favoriteQuote}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="joinedOn"
            placeholder="Joined Date"
            value={this.state.joinedOn}
            onChange={this.handleChange}
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddStudent;

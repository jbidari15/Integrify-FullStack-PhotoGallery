import React, { Component } from "react";

const SingleStudent = props => {
  const { firstName, lastName, skills } = props.eachStudent;
  return (
    <div>
      <div className="ImageDiv">Image</div>
      <span>{`${firstName} ${lastName}`}</span>
    </div>
  );
};

export default SingleStudent;

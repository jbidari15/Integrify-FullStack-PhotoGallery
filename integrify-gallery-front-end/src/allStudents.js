import React from "react";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const AllStudents = props => {
  return (
    <div className="allStudents">
      <div className="container-fluid">
        <div className="row">{props.allStudents}</div>
      </div>
    </div>
  );
};
export default AllStudents;

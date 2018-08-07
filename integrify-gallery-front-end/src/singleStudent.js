import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class SingleStudent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { firstName, lastName, src, _id } = this.props.eachStudent;

    return (
      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
        <div className="img-thumbnail">
          <Link to={`/integrify/students/${firstName}/${_id}`}>
            <img src={src} alt={firstName} className="img-responsive" />
          </Link>
          <div className="caption">
            <p>{`${firstName} ${lastName}`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleStudent;

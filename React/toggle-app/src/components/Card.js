/* eslint-disable jsx-a11y/alt-text */
/* This is very important */
import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img className="card-img-top" src={props.image} />
      <div className="card-body text-center">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.cardText}</p>
        <p className="card-text">
          <small className="text-muted">{props.updatedTime}</small>
        </p>
      </div>
    </div>
  );
};

Card.defaultProps = {
  cardTitle: "Default Card Title",
};

export default Card;

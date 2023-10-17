import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [
      { categoriId: 1, categoriName: "Frukt" },
      { categoriId: 2, categoriName: "Grönsaker" },
    ]
  };
  

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>

        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              key={category.categoriId}
              onClick={() =>this.props.changeCategory(category)}
            >
              {category.categoriName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

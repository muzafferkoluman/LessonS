import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [
      { categoriId: 1, categoriName: "Frukt" },
      { categoriId: 2, categoriName: "Grönsaker" },
    ],
    currentCategory: "",
  };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoriName })
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup horizontal>
          {this.state.categories.map((category) => (
            <ListGroupItem
              key={category.categoriId}
              onClick={() =>this.changeCategory(category)}
            >
              {category.categoriName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h2>{this.state.currentCategory}</h2>
      </div>
    );
  }
}

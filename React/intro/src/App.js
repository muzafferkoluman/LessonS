import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

import React, { Component } from "react";

export default class App extends Component {

  state ={currentCategory: ""}

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoriName });
  };

  render() {
    let categoryInfo = { title: "Category", anotherList: "test" };
    let productInfo = { title: "Product" };
    return (
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory}  info={categoryInfo} />
          </Col>
          <Col xs="9">
            <ProductList currentCategory={this.state.currentCategory} info={productInfo} />
          </Col>
        </Row>
      </Container>
    );
  }
}

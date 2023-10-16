import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";


// import React, { Component } from 'react'

// export default class Navi extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Navigation</h2>
//       </div>
//     )
//   }
// }




function App() {
  let categoryInfo = {title:"Category"}
  let productInfo = {title:"Product"}
  return (
    <Container>
      <Row>
        <Navi />
      </Row>
      <Row>
        <Col xs="3">
          <CategoryList info={categoryInfo} />
        </Col>
        <Col xs="9">
          <ProductList info={productInfo}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

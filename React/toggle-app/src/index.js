import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";
import Collapse from "./components/Collapse";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4 mt-3">
          <Collapse href="collapseExample1">
            <Card
              cardTitle="Card Title 1"
              cardText="Lorem ipsum text 1"
              updatedTime="Last updated 1 days ago"
              image="https://picsum.photos/id/227/200/300"
            />
          </Collapse>
        </div>
        <div className="col-12 col-md-4 mt-3">
          <Collapse href="collapseExample2">
            <Card
              cardTitle="Card Title 2"
              cardText="Lorem ipsum text 2"
              updatedTime="Last updated 2 days ago"
              image="https://picsum.photos/seed/picsum/200/300"
            />
          </Collapse>
        </div>
        <div className="col-12 col-md-4 mt-3">
          <Collapse href="collapseExample3">
            <Card
              cardTitle="Card Title 3"
              cardText="Lorem ipsum text 3"
              updatedTime="Last updated 3 days ago"
              image="https://picsum.photos/id/217/200/300"
            />
          </Collapse>
        </div>
      </div>

    </div>
  );
}

// Bu eski yontem ile yapildi.
// class App2 extends React.Component{
//     render(){
//         return <h2>Test 3</h2>
//     }
// }

ReactDOM.render(<App />, document.getElementById("root"));

/* eslint-disable jsx-a11y/alt-text */
import React from "react";

class Collapse extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent: false,
    };
    this.changeState = "Link with href";
    this.showMore = this.showMore.bind(this);
  }
  showMore() {
    this.setState({
      showContent: true,
      changeState:"Merhaba"
    });
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary w-100" onClick={this.showMore}>
          {this.changeState}
        </button>

        {this.state.showContent ? (
          <div className="collapse show">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;

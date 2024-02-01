/* eslint-disable jsx-a11y/alt-text */
import React from "react";

class Collapse extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent: false,
    };
  }
  showMore() {
    this.setState ( {
      showContent: false,
    })
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary w-100" onClick={this.showMore}>
          Link with href
        </button>

        {this.state.showContent ? (
          <div className="collapse show">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;

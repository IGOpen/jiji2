import React        from "react"

export default class LoadingImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <span className="loading-image"></span>
    );
  }
}
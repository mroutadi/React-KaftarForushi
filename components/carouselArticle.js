import React, { Component } from 'react'

export default class CarouselArticle extends Component {
  constructor (props) {
    super(props);
    const {imgURL, title, description} = props;
  }
  render() {
    return (
      <div className="carousel-Article">
        <img src={this.props.imgURL} />
        <span>{this.props.title}</span>
        <p>{this.props.description}</p>
      </div>
    )
  }
};

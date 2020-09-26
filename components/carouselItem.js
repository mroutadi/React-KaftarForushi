import React, { Component } from 'react'

const PishForush = (props) => {
  const {pishforush} = props;
  if (pishforush) {
    return (
      <span className="forward-sale">پیش فروش</span>
    )
  } else {
    return (
      <span></span>
    )
  }
}
const Price = (props) => {
  const {price} = props;
  var stringPrice = "";
  if(price) {
    stringPrice = price.toString();
  } else {
    stringPrice = "0";
  }
  let showingPrice = "";
  showingPrice += stringPrice[0];
  for(let i = stringPrice.length - 1 ; i > 0 ; i--) {
    if(i%3 != 0) showingPrice += stringPrice[stringPrice.length - i];
    else {
      showingPrice += "," + stringPrice[stringPrice.length - i];
    }
  }
  showingPrice += " تومان";
  return (
    <div className="carouselItem-price">{showingPrice}</div>
  )
}
const Seller = (props) => {
  const issellerUs = props.children;
  if (issellerUs) {
    return (
      <div className="carouselItem-seller carouselItem-seller-us">
       ایران زمین
      </div>
    )
  } else {
    return (
      <div className="carouselItem-seller carouselItem-seller-other">
       آگهی شده
      </div>
    )
  }
}

export default class CarouselItem extends Component {
  constructor (props) {
    super(props);
    const  {pishforushchecker, imgURL, title, price, issellerUs} = props;
  }
  render() {
    return (
      <div className="carousel-item">
        <PishForush pishforush={this.props.pishforushchecker} />
        <img src={this.props.imgURL} />
        <div className="carouselItem-title">{this.props.title}</div>
        <div className="carouselItem-info">
          <Price price={this.props.price} />
          <Seller>{this.props.issellerUs}</Seller>
        </div>
      </div>
    )
  }
}

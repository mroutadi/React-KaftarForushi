import React, { Component } from 'react'
import Moment from 'react-moment';

const Price = (props) => {
  const {price} = props;
  var stringPrice = price.toString();
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
    price && 
    <div className="offerItem-price">{showingPrice}</div>
  )
}
const Seller = (props) => {
  const issellerUs = props.children;
  if (issellerUs) {
    return (
      <div className="offerItem-seller offerItem-seller-us">
       ایران زمین
      </div>
    )
  } else {
    return (
      <div className="offerItem-seller offerItem-seller-other">
       آگهی شده
      </div>
    )
  }
}
const Time = (props) => {
  const {time} = props;
  const dateToFormat = new Date(time);
  return (
    <Moment date={dateToFormat} />
);
}

export default class OfferItem extends Component {
  constructor (props) {
    super(props);
    const  {imgURL, title, Bprice, Aprice, issellerUs, time} = props;
  }
  render() {
    return (
      <div className="offer-item">
        <Seller>{this.props.issellerUs}</Seller>
        <img src={this.props.imgURL} />
        <div className="offerItem-title">{this.props.title}</div>
        <div className="offerItem-info">
          <Price price={this.props.Aprice} />
          <Price price={this.props.Bprice} />
        </div>
        <Time time={this.props.time}/>
      </div>
    )
  }
}
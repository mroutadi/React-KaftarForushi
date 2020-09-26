import React, { Component } from "react";
import Slider from "react-slick";
import CarouselItem from './SOItem';

export default class OfferCarousel extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      slidesToShow: 2,
      centerPadding: '100px',
      speed: 500
    };
    return (
      <div className="Offer-slider">
        <Slider {...settings}>
          <a href="#" className="carousel-link">
            <CarouselItem imgURL="https://dkstatics-public.digikala.com/digikala-products/4628568.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80"
                                    title="لورم ایپسوم متن ساختگی با تولید سادگی "
                                    Aprice={56000}
                                    Bprice={70000}
                                    issellerUs={false}
                                    time={60000}/>
          </a>
          <a href="#" className="carousel-link">
            <CarouselItem imgURL="https://dkstatics-public.digikala.com/digikala-products/4628568.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80"
                                    title="لورم ایپسوم متن ساختگی با تولید سادگی "
                                    Aprice={56000}
                                    Bprice={70000}
                                    issellerUs={false}
                                    time={60000}/>
          </a>
        </Slider>
      </div>
    );
  }
}

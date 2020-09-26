import React, { Component } from "react";
import Slider from "react-slick";
import CarouselItem from './carouselItem';

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth});
  }
  render() {
    var numOfSlides = (((this.state.width - 100) / 500) + 2) >= 5?5:(((this.state.width - 100) / 500) + 2);
    const settings = {
      className: "center",
      infinite: true,
      arrows: true,
      slidesToShow: Math.floor(numOfSlides),
      speed: 500
    };
    return (
      <div className="Bird-slider">
        <Slider {...settings}>
          <a href="#" className="carousel-link">
            <CarouselItem pishforushchecker={true}
                                    imgURL="https://www.pngkit.com/png/full/181-1817977_pirate-parrot-png.png"
                                    title="لورم ایپسوم متن ساختگی با تولید سادگی "
                                    price={50000}
                                    issellerUs={false}/>
          </a>
          <a href="#" className="carousel-link">
            <CarouselItem pishforushchecker={true}
                                    imgURL="https://www.pngkit.com/png/full/181-1817977_pirate-parrot-png.png"
                                    title="لورم ایپسوم متن ساختگی با تولید سادگی "
                                    price={50000}
                                    issellerUs={false}/>
          </a>
          <a href="#" className="carousel-link">
            <CarouselItem pishforushchecker={false}
                                    imgURL="https://www.pngkit.com/png/full/181-1817977_pirate-parrot-png.png"
                                    title="لورم ایپسوم متن ساختگی با تولید سادگی "
                                    price={5000}
                                    issellerUs={false}/>
          </a>
          <a href="#" className="carousel-link">
            <CarouselItem pishforushchecker={false}
                                    imgURL="https://www.pngkit.com/png/full/181-1817977_pirate-parrot-png.png"
                                    title="لورم ایپسوم متن ساختگی با تولید سادگی "
                                    price={150000}
                                    issellerUs={true}/>
          </a>
          <a href="#" className="carousel-link">
            <CarouselItem pishforushchecker={true}
                                    imgURL="https://www.pngkit.com/png/full/181-1817977_pirate-parrot-png.png"
                                    title="لورم ایپسوم متن ساختگی با تولید سادگی "
                                    price={508500}
                                    issellerUs={false}/>
          </a>
          <a href="#" className="carousel-link">
            <CarouselItem pishforushchecker={true}
                                    imgURL="https://www.pngkit.com/png/full/181-1817977_pirate-parrot-png.png"
                                    title="لورم ایپسوم متن ساختگی با تولید سادگی "
                                    price={5550000}
                                    issellerUs={true}/>
          </a>
        </Slider>
      </div>
    );
  }
}

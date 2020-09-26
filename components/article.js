import React, { Component } from "react";
import Slider from "react-slick";
import CarouselArticle from './carouselArticle';

export default class ArticleCar extends Component {
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
    var numOfSlides = (((this.state.width - 100) / 500) + 2) >= 4?4:(((this.state.width - 100) / 500) + 2);
    const settings = {
      className: "center",
      infinite: true,
      arrows: true,
      slidesToShow: Math.floor(numOfSlides),
      speed: 500
    };
    return (
      <div className="Article-slider">
        <Slider {...settings}>
          <a href="#" className="carousel-link">
            <CarouselArticle   imgURL="https://www.pngkit.com/png/full/181-1817977_pirate-parrot-png.png"
                                    title="لورم ایپسوم متن ساختگی با تولید سادگی "
                                    description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، "/>
          </a>
          <a href="#" className="carousel-link">
            <CarouselArticle   imgURL="https://www.pngkit.com/png/full/181-1817977_pirate-parrot-png.png"
                                    title="لورم ایپسوم متن ساختگی با تولید سادگی "
                                    description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، "/>
          </a>
          <a href="#" className="carousel-link">
            <CarouselArticle imgURL="https://www.pngkit.com/png/full/181-1817977_pirate-parrot-png.png"
                                    title="لورم ایپسوم متن ساختگی با تولید سادگی "
                                    description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، "/>
          </a>
          <a href="#" className="carousel-link">
            <CarouselArticle imgURL="https://www.pngkit.com/png/full/181-1817977_pirate-parrot-png.png"
                                    title="لورم ایپسوم متن ساختگی با تولید سادگی "
                                    description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، "/>
          </a>
          <a href="#" className="carousel-link">
            <CarouselArticle   imgURL="https://www.pngkit.com/png/full/181-1817977_pirate-parrot-png.png"
                                    title="لورم ایپسوم متن ساختگی با تولید سادگی "
                                    description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، "/>
          </a>
          <a href="#" className="carousel-link">
            <CarouselArticle   imgURL="https://www.pngkit.com/png/full/181-1817977_pirate-parrot-png.png"
                                    title="لورم ایپسوم متن ساختگی با تولید سادگی "
                                    description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، "/>
          </a>
        </Slider>
      </div>
    );
  }
}

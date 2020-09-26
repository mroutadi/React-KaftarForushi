import React, { Component } from 'react';
import BaseLayout from "../components/layout/BaseLayout";
import {Slider} from "../components/slider";
import Search from '../components/search';
import Ad from '../components/Ad';
import Title from '../components/title';
import CenterMode1 from '../components/birdCarousel';
import CenterMode2 from '../components/drugCarousel';
import Seconpath from '../components/seconpath';
import ArticleCar from '../components/article';
import ContactUs from '../components/contactUs';
import OfferCarousel from '../components/specialOffer';


export default class Ava extends Component {
  render() {
    return (
      <React.Fragment>
        <BaseLayout>
          <Slider/>
          <Search />
          <Ad />
          <Title title="پیشنهاد ویژه" />
          <OfferCarousel />
          <Title title="جدیدترین محصولات پرنده" />
          <CenterMode1 />
          <Seconpath />
          <Title title="جدیدترین مکمل تجهیزات" />
          <CenterMode2 />
          <Title title="آخرین مقالات" />
          <ArticleCar />
          <Title title="نظرات مشتریان" />

          <Title title="تماس با ما" />
          <ContactUs />
        </BaseLayout>
      </React.Fragment>
    )
  }
}

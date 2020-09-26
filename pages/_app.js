import React from 'react';
import App, { Container } from 'next/app';
import Ava from './index';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'react-awesome-slider/dist/styles.css';
import '../styles/main.scss'


export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) { //for managing pages
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render () {
    const { Component, pageProps } = this.props;

    return (
      <Ava>
        <Component {...pageProps }/> 
      </Ava>
    )
  }
}
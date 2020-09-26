import React, { Component } from 'react';

export default class Footer extends Component {
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
    if(this.state.width >= 650.056) {
      return (
        <div className="footer">
          <div className="footer-nav">
            <a href="#">پرندگان زینتی</a>
            <a href="#">مکمل و داروها</a>
            <a href="#">تجهیزات و ملزومات</a>
            <img id="footer-logo" src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Oikya_Front_Logo.png" />
            <a href="#">بلاگ</a>
            <a href="#">درباره ی ما</a>
            <a href="#">تماس با ما</a>
          </div>
          <div className="Right">
            <span>کلیه حقوق برای شرکت ایران زمین محفوظ می باشد.</span>
            <span>Copyright © 2019 Iran Zamin, All Rights Reserved.</span>
          </div>
        </div>
      )
    } else {
      return (
        <div className="footer">
          <img id="footer-logo" src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Oikya_Front_Logo.png" />
          <div className="footer-nav">
            <a href="#">پرندگان زینتی</a>
            <a href="#">مکمل و داروها</a>
            <a href="#">تجهیزات و ملزومات</a>
            <a href="#">بلاگ</a>
            <a href="#">درباره ی ما</a>
            <a href="#">تماس با ما</a>
          </div>
          <div className="Right">
            <span>کلیه حقوق برای شرکت ایران زمین محفوظ می باشد.</span>
            <span>Copyright © 2019 Iran Zamin, All Rights Reserved.</span>
          </div>
        </div>
      )
    }
  }
}

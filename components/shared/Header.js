import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const NavItme = (props) => {
  const {route, name} = props;
  return (
    <Link href={route}>
      <a className="Navbar_item">{name}</a>
    </Link>
  )
}
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleClass= this.toggleClass.bind(this);
    this.state = {
      isBoxVisible: false
    };
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
    if(window.innerWidth > 650.056) {
      this.setState({isBoxVisible: true});
    }
  }

  toggleClass() {
      const currentState = this.state.isBoxVisible;
      this.setState({ ...this.state, isBoxVisible: !currentState });
  };
  render() {
    return (
      <React.Fragment>
      <div className={`containere ${this.state.isBoxVisible ? " change" : ""}`} onClick={this.toggleClass}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div> 
      {this.state.isBoxVisible &&
        <nav className="Header_Nav">
          <NavItme route="/decorativeBirds"
                        name="پرندگان زینتی" />
          <NavItme route="/drugs"
                        name="مکمل و داروها" />
          <NavItme route="/equipment"
                        name="تجهیزات و ملزومات" />
          <NavItme route="/learningPackages"
                        name="محصولات آموزشی" />
          <NavItme route="/blog"
                        name="بلاگ" />
          <NavItme route="/aboutUs"
                        name="درباره ما" />
          <NavItme route="/contactUS"
                        name="تماس با ما" />
          <NavItme route="/signin"
                        name="ورود / ثبت نام" />
          <NavItme route="/cart"
                        name="سبد خرید" />
        </nav>
      }
      </React.Fragment>
      )
  }
}

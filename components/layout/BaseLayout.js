import React, { Children } from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer';


const BaseLayout = (props) => {
  const {children} = props;
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default BaseLayout;
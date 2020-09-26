import React from 'react';
import {Button} from 'reactstrap';

const Simple = (props) => {
  const {imgURL, title} = props;
  return (
    <a href="#" className="Simple">
      <img src={imgURL} />
      <span>{title}</span>
    </a>
  )
}

const Withsign = () => {
  return (
    <a href="#" className="Withsign">
      <img src="https://www.lunapic.com/editor/premade/transparent.gif" />
      <span>فروشنده شوید</span>
    </a>
  )
}

const Seconpath = () => (
  <div className="secondpath-container">
    <Simple imgURL="https://www.lunapic.com/editor/premade/transparent.gif" title="مکمل و داروها" />
    <Simple imgURL="https://www.lunapic.com/editor/premade/transparent.gif" title="پرندگان زینتی" />
    <Withsign />
    <Simple imgURL="https://www.lunapic.com/editor/premade/transparent.gif" title="محصولات آموزشی" />
    <Simple imgURL="https://www.lunapic.com/editor/premade/transparent.gif" title="تجهیزات و ملزومات" />
  </div>
)


export default Seconpath;
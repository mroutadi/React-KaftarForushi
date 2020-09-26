import React, { Component } from 'react';
import {Button} from 'reactstrap';

export default class ContactUs extends Component {
  render() {
    return (
      <div className="Contact-us">
        <p className="cnt-us-dec">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط</p>
        <div className="under-ways" >
          <p className="cnt-us-way" ><span>آدرس ما:</span>تهران، چهارراه استانبول، بازارچه فردوسی، طبقه اول، پلاک ۲۷</p>
          <p className="cnt-us-way" ><span>شماره تماس:</span>۰۹۱۲۳۴۵۶۷۸۹  ۰۹۱۲۳۴۵۶۷۸۹ ۰۹۱۲۳۴۵۶۷۸۹ ۰۹۱۲۳۴۵۶۷۸۹   </p>
          <p className="cnt-us-way" >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و </p>
        </div>
        <div className="solcial-networks" >
          <Button id="whatsapp-button">واتساپ ایران زمین</Button>
          <Button id="telegram-button">تلگرام ایران زمین</Button>
          <Button id="instagram-button">اینستاگرام ایران زمین</Button>
        </div>
        <div className="flw-us-txt">ما را در شبکه های اجتماعی دنبال کنید</div>
        <div className="cnt-us-adv"><a href="#">ارسال پیشنهادات</a></div>
      </div>
    )
  }
}

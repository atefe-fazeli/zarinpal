import React from 'react';
import {Link} from "react-router-dom"
import styles from "./Footer.module.css"
import { GrTwitter } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { SiAparat } from "react-icons/si";


// import aparat from '../images/aparat.png';




const Footer = () => {
    return (
        <div className={styles.footermaincontainer}>
            <div className={styles.firstdivcontainer}>
                <h1>به خانواده‌ی یک میلیونی زرین‌پال بپیوندید.</h1>
                <h3>یک ماه رایگان، هدیه‌ی عضویت زرین‌پال به شما</h3>
                <button >شروع کنید</button>
            </div>
            <div className={styles.seconddivcontainer}>
                <h3>پشتیبانی ۲۴ ساعته، ۷ روز هفته| شماره تماس:   <span className={styles.footerspan}> ۴۱۲۳۹-۰۲۱</span></h3>
                <Link to="/">درخواست پشتیبانی</Link>
             </div>
            <div className={styles.thireddivcontainer}>
                <div >
                    <h2>محصولات</h2>
                    <Link to="/" className={styles.footerlink}>زرین لینک </Link>
                    <Link to="/" className={styles.footerlink}>درگاه پرداخت اینترنتی</Link>
                    <Link to="/" className={styles.footerlink}>زرین کارت</Link>
                    <Link to="/" className={styles.footerlink}>تسهیم</Link>
                </div>

                <div>
                <h2>آشنایی با زرین پال</h2>
                    <Link to="/" className={styles.footerlink}>تعرفه ها </Link>
                    <Link to="/" className={styles.footerlink}>در باره ما </Link>
                    <Link to="/" className={styles.footerlink}>سوالات متداول</Link>
                    <Link to="/" className={styles.footerlink}>همکاری در فروش</Link>
                </div>

                <div>
                <h2>ارتباط بیشتر </h2>
                    <Link to="/" className={styles.footerlink}>تماس با ما</Link>
                    <Link to="/" className={styles.footerlink}>قوانین و مقررات</Link>
                    <Link to="/" className={styles.footerlink}>حریم خصوصی</Link>
                </div>

                <div>
                <h2>منابع</h2>
                    <Link to="/" className={styles.footerlink}>دریافت شماره شبا</Link>
                    <Link to="/" className={styles.footerlink}>زرین بین</Link>
                    <Link to="/" className={styles.footerlink}>توسعه دهندگان</Link>
                    <Link to="/" className={styles.footerlink}>وبلاگ</Link>
                </div>

                <div className={styles.socialdivcontainer}>
                <h2>زرین پال در شبکه های اجتماعی:</h2>
                    <Link to="/" className={styles.sociallinks}><GrTwitter/></Link>
                    <Link to="/" className={styles.sociallinks}><FaInstagram/></Link>
                    <Link to="/" className={styles.sociallinks}><FaTelegramPlane/></Link>
                    <Link to="/" className={styles.sociallinks}><TiSocialLinkedin/></Link>
                    <Link to="/" className={styles.sociallinks}><SiAparat/></Link>


                    {/* <Link to="/"> {aparat}</Link> */}

                </div>

            </div>
            <div>زرین پال 1400-1398</div>

            
        </div>
    );
};

export default Footer;
import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className={styles.navbarcontainer}>
            <div className={styles.logocontainer}></div>
            <div className={styles.buttonandlistcontainer}>
            <div className={styles.mainlistcontainer}>
                <ul className={styles.listcontainer}>
                   <li className={styles.productsdiv}> محصولات </li>
                     <div className={styles.productscontainr}>
                     <ul>
                        <li><Link to="/"><span>درگاه پرداخت</span>مهندسی شده برای فروش بیش تر</Link></li>
                        <li><Link to="/"><span>زرین لینک</span>لینک پرداخت در شبکه های اجتماعی </Link></li>
                        <li><Link to="/"><span>زرین پلاس</span>ابزار هوشمند سوددهی</Link></li>
                        <li><Link to="/"><span>زرین کارت</span>طلایی ترین کارت بانکی</Link></li>
                        <li><Link to="/"><span>تسهیم</span>درگاه پرداخت اشتراکی</Link></li>
                      </ul>
                     </div>
                    <li>تعرفه ها</li>
                    <li>توسعه دهندگان</li>
                    <li>تماس با ما</li>
                    <li className={styles.detailsdiv}>بیشتر</li>
                    <div className={styles.detailsdivcontainer}>
                      <ul>
                        <li><Link to="/">وبلاگ</Link></li>
                        <li><Link to="/">دریافت شماره شبا</Link></li>
                        <li><Link to="/">سوالات متداول</Link></li>
                        <li><Link to="/">اپلیکیشن</Link></li>
                        <li><Link to="/">زرین بین </Link></li>
                      </ul>
                    </div>
                </ul>
            </div>
            <button>زرین پال من</button>
            </div>
            
        </div>
    );
};

export default Navbar;
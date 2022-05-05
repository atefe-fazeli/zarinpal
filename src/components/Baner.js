import React from 'react';
import styles from './Baner.module.css'

const Baner = () => {
    return (
        <>
        <div className={styles.banermaincontainer}>
            <div>
                <h1>
                    بیش از ۱۲ سال
                   انتخاب مطمئنِ کسب                   
                    وکار های آنلاین
                </h1>
                <p>زرین‌پال، اولین پرداخت‌یار 
                    پیشگام کشور، با به‌کارگیری سبک و استانداردهای 
                    جدید در ارائه‌ی خدمات درگاه پرداخت اینترنتی، 
                    سرویس‌های متنوعی در حوزه‌ی پرداخت الکترونیک را
                     برای کسب و کارها ارائه کرده است؛ با این
                     هدف که در افزایش سهم تجارت الکترونیکی 
                    در تولید ناخالص ملی و کمک به رشد 
                    و توسعه‌ی کسب‌وکارها، نقش سازنده‌‌ای ایفا کند 
                </p>
                <button>ثبت نام</button>
                <button>ورود</button>
            </div>
            <div className={styles.banerimagecontainer}></div>

            <div className={styles.firstdivgodown}>
                <div className={styles.seconddivgodown}></div>
            </div> 
        </div>
         
         </>
    );
};

export default Baner;
import React from 'react';
import styles from './SectionSix.module.css'
import { BiSupport } from 'react-icons/bi';
import { MdOutlineVerified } from 'react-icons/md';
import { MdOutlineCallSplit } from 'react-icons/md';


const SectionSix = () => {
    return (
        <div className={styles.SecSixmaincontainer}>
            <div className={styles.SecSixfirstDivcontainer}>
                <h1>ویژگی‌های درگاه پرداخت زرین‌پال</h1>
                <p>درگاه پرداخت اینترنتی زرین‌پال، امکان مدیریت تراکنش‌های مالی در بستر وب را به راحتی امکان‌پذیر می‌کند و با پیاده‌سازی و اجرای راه‌کارهای هوشمندانه، باعث افزایش درصد تراکنش‌های موفق و سوددهی بیش‌تر می‌شود.</p>
            </div>
            <div className={styles.SecSixSecondDivcontainer}>
                <div className={styles.SecSixZemanatcontainer}>
                    <h1>ضمانت پرداخت<span><MdOutlineVerified /></span></h1>
                    <p>درگاه پرداخت زرین‌پال، تجربه‌ی پرداخت اینترنتی آسان، سریع و امن را به مشتریان کسب و کارهای آنلاین هدیه می‌دهد.</p>
                </div>
                <div className={styles.SecSixMasircontainer}>
                    <h1>مسیردهی هوشمند<span><MdOutlineCallSplit /></span></h1>
                    <p>استانداردهای متفاوت زرین‌پال در بازه‌های زمانی مختلف، باعث می‌شود کاربران به بهترین درگاه پرداخت با بالاترین میزان تراکنش‌های موفق هدایت شوند.</p>
                </div>
                <div className={styles.SecSixSupoortcontainer}>
                    <h1>پشتیبانی ۲۴/۷<span><BiSupport /></span></h1>
                    <p>هفت روزِ هفته، با پشتیبانی ۲۴ ساعته‌ی زرین‌پال، آماده‌ی پاسخ‌گویی و راهنمایی به کاربران هستیم.</p>
                </div>
                <div className={styles.SecSixSecuritycontainer}>
                    <h1>امنیتِ پرداخت<span><BiSupport /></span></h1>
                    <p>درگاه امن زرین‌پال، ضمانتی برای امنیت اطلاعات بانکی افراد، هنگام پرداخت‌‌های اینترنتی آن‌هاست.</p>
                </div>
            </div> 
        </div>
    );
};

export default SectionSix;
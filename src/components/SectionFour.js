import React from 'react';
import styles from './SectionFour.module.css'

const SectionTwo = () => {
    return (
        <div className={styles.SecFourContainer}>
            

            <div>
                 <h3>تسهیم</h3>
                 <h1>درگاه پرداخت اشتراکی</h1>
                 <p>تسهیم بهترین روش برای مدیریت مالی کسب‌ و کارهای شراکتی است که به واسطه‌ی آن، درآمد حاصل از فروش محصولات یا خدمات، در سهم‌های ثابت یا متغیر میان شرکای تجاری تقسیم شده و به صورت جداگانه به حساب هر شخص واریز می‌‌شود.</p>
                 <button>درخواست فعال سازی تسهیم</button>
                 <button id='readmore'>بیش تر بدانید</button>
            </div>
            <div className={styles.SecFourImgContainer}></div>



        </div>
            
    
    );
};

export default SectionTwo;
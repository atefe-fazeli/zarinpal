import React from 'react';
import styles from './SectionTwo.module.css'

const SectionTwo = () => {
    return (
        <div className={styles.SecTwoContainer}>
            

            <div>
                 <h3>زرین‌لینک</h3>
                 <h1>پرداخت در شبکه‌های اجتماعی</h1>
                 <p>زرین‌لینک با مدیریت فرآیند فروش به روشی هوشمندانه و سریع، باعث افزایش فروش محصولات و خدمات، از طریق شبکه‌های اجتماعی مانند اینستاگرام، تلگرام یا وب‌سایت می‌شود</p>
                 <button>ساخت زرین لینک</button>
                 <button>بیش تر بدانید</button>
            </div>
            <div className={styles.SecTwoImgContainer}></div>



        </div>
            
    
    );
};

export default SectionTwo;
import React,{useRef} from 'react';
import styles from './SectionOne.module.css'

const SectionOne = () => {
    // const myRef = useRef(null)

    
    return (
        <div className={styles.SecOneMainContainer} id="sectionone" >

            <div className={styles.SecOneImgContainer}></div>

            <div>
                 <h3>درگاه پرداخت اینترنتی</h3>
                 <h1>مهندسی شده برای رشد و فروش بیش‌تر</h1>
                 <p>درگاه پرداخت زرین‌پال، با اتصالِ همزمان به درگاه‌های متنوع و معتبر بانکی(PSPها)،کاربران را به سریع‌ترین و مطمئن‌ترین درگاه بانکی منتقل می‌کند و به واسطه‌ی قابلیت مسیردهی هوشمند، باعث افزایش درصد تراکنش‌های موفق می‌شود</p>
                 <button>ساخت درگاه پرداخت</button>
                 <button id='readmore'>بیش تر بدانید</button>
            </div>


        </div>
       
    );
};

export default SectionOne;


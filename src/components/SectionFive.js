import React from 'react';
import styles from './SectionFive.module.css'

const SectionFive = () => {
    return (
        <div className={styles.SecFiveMainContainer}>

            <div className={styles.SecFiveImgContainer}></div>

            <div>
                 <h3>زرین پلاس</h3>
                 <h1>ابزار هوشمند سوددهی</h1>
                 <p>زرین‌پلاس محصولی از زرین‌پال، فرصتی فراهم کرده است تا کسب و کارها در هر اندازه و دسته‌بندی شغلی، با در دست داشتن ابزاری قدرتمند برای وفادارسازی مشتریان و افزایش فروش محصولات خود، بتوانند کسب و کار خود را به بهترین شکل توسعه و گسترش دهند و جایگاه برترین فروشگاه منطقه را به خود اختصاص دهند.</p>
                 <button>پیوستن به زرین پلاس</button>
                 <button id='readmore'>بیش تر بدانید</button>
            </div>


        </div>
       
    );
};

export default SectionFive;


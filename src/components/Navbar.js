import React, { useState } from 'react';
import styles from "./Navbar.module.css"
import Onmousefirstcomponent from './Onmousefirstcomponent';
import Onmousesecondcomponent from './Onmousesecondcomponent';

const Navbar = () => {
    const [data,setData]=useState(false)
    return (
        <div className={styles.navbarcontainer}>
            <div className={styles.logocontainer}></div>
            <div className={styles.buttonandlistcontainer}>
            <div className={styles.mainlistcontainer}>
                <ul className={styles.listcontainer}>
                   <li><button onClick={()=>setData(!data)} className={data ? <Onmousefirstcomponent /> : <Onmousesecondcomponent/>}>محصولات </button></li>
                   {data ?<div> <Onmousefirstcomponent /> </div>:  <div><Onmousesecondcomponent/></div>}
                    <li>تعرفه ها</li>
                    <li>توسعه دهندگان</li>
                    <li>تماس با ما</li>
                    <li>بیشتر</li>
                </ul>
            </div>
            <button>زرین پال من</button>
            </div>
            
        </div>
    );
};

export default Navbar;
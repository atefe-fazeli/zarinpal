import React from 'react';
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.navbarcontainer}>
            <div className={styles.logocontainer}>لوگو</div>
            <div className={styles.buttonandlistcontainer}>
            <div className={styles.mainlistcontainer}>
                <ul className={styles.listcontainer}>
                    <li>تعرفه ها </li>
                    <li>اپلیکیشن</li>
                    <li>سوالات متداول</li>
                    <li>محصولات</li>
                    <li>تماس با ما</li>
                </ul>
            </div>
            <button>زرین پال من</button>
            </div>
            
        </div>
    );
};

export default Navbar;
import React from 'react';
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.navbarcontainer}>
            <div className={styles.logocontainer}></div>
            <div className={styles.buttonandlistcontainer}>
            <div className={styles.mainlistcontainer}>
                <ul className={styles.listcontainer}>
                    <li>محصولات </li>
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
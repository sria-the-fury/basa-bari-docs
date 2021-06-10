import React from 'react';
import styles from "../../styles/Navbar.module.css";
import Image from "next/image";

export const Navbar = () => {
    return(
        <div className={styles.navbar}>
            <div className={styles.brandContainer}>
                <div className={styles.appImage}>
                    <Image
                        src="/assets/app-image.png"
                        alt="Picture of the author"
                        width={60}
                        height={60}
                    />

                </div>
                <div className={styles.appNameAndAppMotto}>
                    <div className={styles.appName}>
                        Basa Bari
                    </div>
                    <div className={styles.appMotto}>
                        FIND YOUR HOME - Across the Cities
                    </div>
                </div>
            </div>


            <div>
                <ul className={styles.navbarUl}>
                    <li>
                        FEATURES
                    </li>
                    <li>
                        FEATURES
                    </li>

                    <li>
                        FEATURES
                    </li>

                    <li>
                        FEATURES
                    </li>

                    <li>
                        FEATURES
                    </li>

                </ul>
            </div>


           </div>
    )
}

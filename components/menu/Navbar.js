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
                        width={50}
                        height={50}
                    />

                </div>
                <div className={styles.appNameAndAppMotto}>
                    <div className={styles.appName}>
                        Basa Bari
                    </div>
                    {/*<div className={styles.appMotto}>*/}
                    {/*    FIND YOUR HOME - Across the Cities*/}
                    {/*</div>*/}
                </div>
            </div>

            <div className={'d-none d-xl-block d-lg-block'} style={{paddingTop: '13px'}}>
                <ul className={`${styles.navbarUl}`}>
                    <li>
                        FEATURES
                    </li>
                    <li>
                        UPCOMING
                    </li>

                    <li>
                        CONTACT
                    </li>

                </ul>
            </div>

        </div>
    )
}

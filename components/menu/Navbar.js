import React, {useState} from 'react';
import styles from "../../styles/Navbar.module.css";
import Image from "next/image";
import {Menu, Close} from '@styled-icons/material';
import Sidebar from "../menu/Sidebar"


export const Navbar = () => {

    const [openSidebar, setSidebar] = useState(false);
    return(
        <div className={styles.navbar}>
            <div className={styles.brandContainer}>
                <div className={styles.appImage}>
                    <Image
                        src="/assets/app-image.png"
                        alt="App Logo"
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
            <div className={'d-block d-sm-block d-md-block d-lg-none d-xl-none cursor-pointer'}>
                { openSidebar ? <Close size="30" title="Menu" color={'white'} onClick={() => setSidebar(false)}/>
                    :
                    <Menu size="30" title="Menu" color={'white'} onClick={() => setSidebar(true)}/>
                }
            </div>


            <Sidebar closeSidebar={setSidebar} openSidebar={openSidebar}/>

        </div>
    )
}

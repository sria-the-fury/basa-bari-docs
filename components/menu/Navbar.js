import React, {useState} from 'react';
import styles from "../../styles/Navbar.module.css";
import Image from "next/image";
import {Menu, Close} from '@styled-icons/material';
import Sidebar from "../menu/Sidebar";
import UnderDevelop from "../../utilities/UnderDevelop";

export const Navbar = () => {

    const [getSection, setSection] = useState('home');

    const [openSidebar, setSidebar] = useState(false);
    return(
        <div className={'fixed-top'}>
            <UnderDevelop/>
            <div className={`${styles.navbar}`}>
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
                            <a href={'#home'} rel={'noopener'} onClick={() => setSection('home')}>Basa Bari</a>
                        </div>
                        {/*<div className={styles.appMotto}>*/}
                        {/*    FIND YOUR HOME - Across the Cities*/}
                        {/*</div>*/}
                    </div>
                </div>

                <div className={'d-none d-xl-block d-lg-block'} style={{paddingTop: '13px'}}>
                    <ul className={`${styles.navbarUl}`}>
                        <a href={'#features'} onClick={() => setSection('features')}>
                            <li className={getSection === 'features' ? 'active-section' : ''}>
                                FEATURES
                            </li>
                        </a>

                        <a href={'#upcoming'} onClick={() => setSection('upcoming')}>
                            <li className={getSection === 'upcoming' ? 'active-section' : ''}>
                                UPCOMING
                            </li>
                        </a>

                        <a href={'#contact'} onClick={() => setSection('contact')}>
                            <li className={getSection === 'contact' ? 'active-section' : ''}>
                                CONTACT
                            </li>
                        </a>

                    </ul>
                </div>
                <div className={'d-block d-sm-block d-md-block d-lg-none d-xl-none cursor-pointer'}>
                    { openSidebar ? <Close size="30" title="Menu" color={'white'} onClick={() => setSidebar(false)}/>
                        :
                        <Menu size="30" title="Menu" color={'white'} onClick={() => setSidebar(true)}/>
                    }
                </div>


                <Sidebar closeSidebar={setSidebar} openSidebar={openSidebar} getSection={getSection} setSection={setSection}/>

            </div>
        </div>

    )
}

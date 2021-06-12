import React from "react";
import { Modal } from 'react-responsive-modal';
import {East} from "@styled-icons/material";
import Image from "next/image";
import styles from "../../styles/Sidebar.module.css";

const Sidebar = ({closeSidebar, openSidebar}) => {

    return(
        <Modal open={openSidebar} onClose={() => closeSidebar(false)}
               focusTrapped={false}
               classNames={{
                   overlay: styles.customOverlay,
                   modal: styles.sidebarModal,
                   modalAnimationIn: styles.sidebarEnterAnimation,
                   modalAnimationOut: styles.sidebarLeaveAnimation,
               }}
               closeIcon={<East size={20} color={'white'}/>}
        >
            <div className={styles.sidebarContainer}>
                <div className={styles.appImageContainerSidebar}>
                    <Image
                        src="/assets/app-image.png"
                        alt="App Logo"
                        width={50}
                        height={50}
                    />

                </div>

                <div className={styles.appName}>
                    Basa Bari
                </div>

                <ul className={styles.sidebarUl}>
                    <a href={'#features'}>
                        <li>
                            FEATURES
                        </li>
                    </a>

                    <li>
                        UPCOMING
                    </li>

                    <a href={'#contact'}>
                        <li>
                            CONTACT
                        </li>
                    </a>

                </ul>
            </div>
        </Modal>

    )
}

export default Sidebar;
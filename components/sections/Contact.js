import React from 'react';
import styles from "../../styles/Contact.module.css";
import {Github} from "@styled-icons/bootstrap/Github"

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <section id={'contact'}>
                <h4 style={{textAlign: 'center'}}>Basa Bari</h4>
                <div className={'container-fluid'}>
                    <div className={'row'}>
                        <div className={'col-lg-6 col-md-6 col-sm-12'}>
                            <div>photos are used here from
                                <a href={"https://pexels.com"} target={"_blank"} rel={"noreferrer"} className={styles.pexelLink}> pexels.</a>
                            </div>

                        </div>
                        <div className={'col-lg-6 col-md-6 col-sm-12'}>
                            <div style={{textAlign: 'right'}}>
                                <a className={styles.githubLink} href={"https://github.com/sria-the-fury"} rel={"noopener"} target={"_blank"}>
                                    <Github size={20} color={'black'}/> sria-the-fury
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
                <div className={styles.bottomCopyRight}>©Basa Bari 2021</div>
            </section>

        </div>
    );
};

export default Contact;
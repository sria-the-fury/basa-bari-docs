import React from 'react';
import styles from "../../styles/Upcoming.module.css";
import {MapMarked} from "@styled-icons/fa-solid/MapMarked";
import ScrollAnimation from 'react-animate-on-scroll';
import Image from "next/image";
import {DesignIdeas} from "@styled-icons/fluentui-system-filled/DesignIdeas";
import {AppStore} from "@styled-icons/fa-brands/AppStore";

const Upcoming = () => {
    return (
        <div className={'container-fluid'}>
            <section id={'upcoming'}>
                <ScrollAnimation delay={2000}
                                 animateIn='jello'
                                 initiallyVisible={true}>
                    <h4 style={{textAlign: 'center'}}>
                        UPCOMING
                    </h4>
                </ScrollAnimation>
            </section>


            <div className={'row'}>
                <div className={'col-sm-12 col-md-4 col-lg-3'}>
                    <ScrollAnimation animateIn='flipInY'
                                     animateOut='flipOutY'>
                        <div className={styles.cardContainer}>
                            <div className={styles.card}>
                                <div className={styles.cardTitle}>MAP VIEW</div>
                                <div className={styles.cardIcons}>
                                    <MapMarked size={60} color={'white'}/>

                                </div>
                                <div className={styles.cardText}>
                                    <p>Implementing Google Maps to find the rental home on the map easily around the users. The listings will be on the map as marked view.</p>
                                    <p>The landlords will add their building listing by searching places and these listings will be shown in the map marked view.</p>
                                </div>

                            </div>
                        </div>
                    </ScrollAnimation>

                </div>

                <div className={'col-sm-12 col-md-4 col-lg-3'}>
                    <ScrollAnimation animateIn='flipInY'
                                     animateOut='flipOutY'>
                        <div className={styles.cardContainer}>
                            <div className={styles.card}>
                                <div className={styles.cardTitle}>PAYMENT METHOD</div>
                                <div className={styles.cardIcons}>
                                    {/*<MapMarked size={60} color={'white'}/>*/}
                                    <Image src={'/assets/payment-logo/bkash.png'} height={40} width={80}/>
                                    <Image src={'/assets/payment-logo/nagad.png'} height={35} width={80}/>

                                </div>
                                <div className={styles.cardText}>
                                    <p>Everyone wants to earn some. I have this vision too. That's why I will integrate the mobile payment method such users can easily pay their payment while adding their building's listing.</p>
                                    <p>bKash and Nagad will be two payment methods for this application. bKash is a trademark logo of bKash and Nagad is a trademark logo of Nagad.</p>
                                </div>

                            </div>
                        </div>
                    </ScrollAnimation>
                </div>

                <div className={'col-sm-12 col-md-4 col-lg-3'}>
                    <ScrollAnimation animateIn='flipInY'
                                     animateOut='flipOutY'>
                        <div className={styles.cardContainer}>
                            <div className={styles.card}>
                                <div className={styles.cardTitle}>UPGRADED DESIGN</div>
                                <div className={styles.cardIcons}>
                                    <DesignIdeas size={60} color={'white'}/>

                                </div>
                                <div className={styles.cardText}>
                                    <p>This design is chosen as the primary design for this android application. I think this is not the better design for the users. But as a startup, I hope this enough as I am solely developing this. </p>
                                    <p>Later updated technologies will be used for making better design and color strategy.</p>
                                </div>

                            </div>
                        </div>
                    </ScrollAnimation>
                </div>

                <div className={'col-sm-12 col-md-4 col-lg-3'}>
                    <ScrollAnimation animateIn='flipInY'
                                     animateOut='flipOutY'>
                        <div className={styles.cardContainer}>
                            <div className={styles.card}>
                                <div className={styles.cardTitle}>FOR iOS</div>
                                <div className={styles.cardIcons}>
                                    <AppStore size={60} color={'white'}/>

                                </div>
                                <div className={styles.cardText}>
                                    <p>My first target is the android playStore for deploy the application in the market. But iOS version (AppStore) will be coming in a short time after deploying for playStore.</p>
                                    <p>Don't have a Mac or macOS is my main lack now. As a middle-class family, I can't afford this. I am just kidding, hahaha.</p>
                                </div>

                            </div>
                        </div>
                    </ScrollAnimation>
                </div>

            </div>

        </div>
    );
};

export default Upcoming;
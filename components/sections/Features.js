import React from 'react';
import Image from 'next/image';
import styles from "../../styles/Features.module.css";
import { Parallax } from 'react-parallax';

const Features = () => {
    return (

        <section id={'features'}>
            <div className={'container-fluid'}>
                <div className={"row"}>
                    <div className={"col-lg-4 col-md-4 col-sm-12"}>
                        <div className={styles.imageAreaContainer}>
                            <Image src="/assets/features/phone-auth.jpg" height={585} width={270} alt="Phone Auth" className={styles.imageContainer}/>
                        </div>

                    </div>
                    <div className={"col-lg-4 col-md-4 col-sm-12"}>
                        <div className={styles.imageAreaContainer}>
                            <Image src="/assets/features/otp.jpg" height={585} width={270} alt="Phone Auth OTP" className={styles.imageContainer}/>
                        </div>
                    </div>

                    <div className={"col-lg-4 col-md-4 col-sm-12"}>
                        <div className={styles.featuresHeaders}>
                            Phone Authentication
                        </div>
                        <hr/>
                        <div className={styles.paragraphText}>
                            <p>
                                Creating an account by email is need more time, and also you have to provide password. After then you have to verify your email to get an authenticated account.
                            </p>
                            <p>
                                But it is easy to create and sign in your account by just your cell phone number. No need to give any password, no need to remember your password. Just put the OTP you will get from the sms by your phone number.
                            </p>
                        </div>
                    </div>


                </div>
            </div>

            <Parallax blur={0} bgImage="/assets/carousel-images/image-1.jpg" bgImageAlt="the cat" strength={500}>
                <div style={{ height: '200px' }} />
            </Parallax>
            <div className={'container-fluid'}>

                <div className={"row"}>

                    <div className={"col-lg-4 col-md-4 col-sm-12"}>
                        <div className={styles.featuresHeaders}>
                            Creating Profile
                        </div>
                        <hr/>
                        <div className={styles.paragraphText}>
                            <p>
                                We don't want so much data about you. Even we don't steal your information from your phone. But by creating and setting up profile in  "Basa Bari" your phone number, name and display photo will be visible to others people who have already created their account unless you don't message them or don't publish any listing for you building.
                            </p>
                            <p>
                                After authenticating your account, you can easily set your profile. Upload your display photo, your name and most important your role as "Tenant" or "Landlord".
                            </p>
                            <p>
                                If you just want to see the rental home ads, you can simply select your role as "Tenant" or Add your building listing for getting Tenant you can choose the role as "Landlord".
                            </p>
                        </div>
                    </div>

                    <div className={"col-lg-4 col-md-4 col-sm-12"}>
                        <div className={styles.imageAreaContainer}>
                            <Image src="/assets/features/create-profile-1.jpg" height={585} width={270} alt="Phone Auth" className={styles.imageContainer}/>
                        </div>

                    </div>
                    <div className={"col-lg-4 col-md-4 col-sm-12"}>
                        <div className={styles.imageAreaContainer}>
                            <Image src="/assets/features/create-profile-2.jpg" height={585} width={270} alt="Phone Auth OTP" className={styles.imageContainer}/>
                        </div>
                    </div>


                </div>
            </div>

        </section>

    );
};

export default Features;
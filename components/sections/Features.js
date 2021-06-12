import React from 'react';
import Image from 'next/image';
import styles from "../../styles/Features.module.css";

const Features = () => {
    return (
        <div className={'container-fluid'}>
            <section id={'features'}>
                <h3 style={{textAlign: 'right'}}>Features</h3>
                <div className={"row"}>
                    <div className={"col-lg-4 col-md-4 col-sm-12"}>
                        <Image src="/assets/features/phone-auth.jpg" height={585} width={270} alt="Phone Auth" className={styles.imageContainer}/>
                    </div>
                    <div className={"col-lg-4 col-md-4 col-sm-12"}>
                        <Image src="/assets/features/otp.jpg" height={585} width={270} alt="Phone Auth OTP" className={styles.imageContainer}/>
                    </div>

                    <div className={"col-lg-4 col-md-4 col-sm-12"}>
                        <div className={"font-weight-bold"}>
                            Phone Authentication
                        </div>
                        <hr/>
                        <div className={styles.paragraphText}>
                            <p>
                                Creating an account by email is need more time, and also you have to provide password. After then you have to verify your email to get an authenticated account.
                            </p>
                            <p>
                                But It is easy to create and sign in your account by just your cell phone number. No need to give any password, no need to remember your password. Just put the OTP you will get from the sms by your phone number.
                            </p>
                        </div>
                    </div>


                </div>

            </section>

        </div>
    );
};

export default Features;
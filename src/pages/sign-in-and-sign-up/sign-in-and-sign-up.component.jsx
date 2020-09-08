import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { motion } from 'framer-motion';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (

    <motion.div
    initial = {{ opacity:0 }}
    animate = {{ opacity:1 }} 
    exit = {{ opacity:0 }} >
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>

    </motion.div>
);

export default SignInAndSignUpPage;
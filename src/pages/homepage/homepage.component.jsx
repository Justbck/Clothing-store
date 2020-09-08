import React from 'react';
import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';
import { motion } from 'framer-motion';

const HomePage = () => (
    <motion.div 
        initial = {{ opacity:0 }}
        animate = {{ opacity:1 }} 
        exit = {{ opacity:0 }} >
        <div className='homepage'>
            <Directory/>
        </div>
    </motion.div>
  

);

export default HomePage;
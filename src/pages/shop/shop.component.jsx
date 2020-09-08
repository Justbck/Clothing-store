import React from 'react';
import {Route} from 'react-router-dom';
import { motion } from 'framer-motion';

import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';


const ShopPage = ({match}) => (

    <motion.div 
        initial = {{ opacity:0 }}
        animate = {{ opacity:1 }} 
        exit = {{ opacity:0 }} >
            <div className = 'shop-page'>
            <Route exact path = {`${match.path}`} component = {CollectionsOverview}/>
            <Route path = {`${match.path}/:collectionId`} component = {CollectionPage} />
            </div>
    </motion.div>
);



export default ShopPage;
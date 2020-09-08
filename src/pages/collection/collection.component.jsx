import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';
import { motion } from 'framer-motion';


const CollectionPage = ({ collection }) => {


   const{title,items} = collection;
    return (
    <motion.div
        initial = {{ opacity:0 }}
        animate = {{ opacity:1 }} 
        exit = {{ opacity:0 }} >

    <div className = 'collection-page'>
    <h2 className = 'title' >{title}</h2>
    <div className = 'items'>
        {items.map(item => (
            <CollectionItem key = {item.id} item={item}/>
        ))}
    </div>  
    </div>
    </motion.div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

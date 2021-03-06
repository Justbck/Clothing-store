import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title,imageUrl, history,linkUrl,match }) => (
    <div 
    onClick ={() => history.push(`${match.url}${linkUrl}`)}
        style= {{
        backgroundImage: `url(${imageUrl})`
    }}
        className='menu-item'
    >
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>shop now</span>
        </div>
    </div>
);

export default withRouter(MenuItem);
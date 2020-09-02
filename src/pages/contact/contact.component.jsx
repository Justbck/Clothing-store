import React from 'react';
import './contact.styles.scss';


const ContactPage = () => (

    <div className = 'contact-page'>

            <h2 className='title'>
            This website is a part of portfolio. 
            </h2>
            <ul className = 'info'>
                <li><span className = 'link'> Developer: </span> Justyna Bucko </li>
                <li><span className = 'link'> Website: </span>  <a href='http://justyna-bucko.pl/'> http://justyna-bucko.pl/</a></li>
                <li><span className = 'link'> Github: </span>   <a href='https://github.com/Justbck'>https://github.com/Justbck</a></li>
                <li><span className = 'link'>LinkedIn:</span>   <a href='https://www.linkedin.com/in/justyna-bucko-51a2b5188/'>https://www.linkedin.com/in/justyna-bucko-51a2b5188/</a></li>
                <li><span className = 'link'>Behance:</span>    <a href='https://www.behance.net/Justbck'>https://www.behance.net/Justbck</a></li>
                <li><span className = 'link'>Email: </span>   <email> <a href="mailto:buckojustyna@gmail.com">buckojustyna@gmail.com </a></email></li>
            </ul>
    </div>
);

export default ContactPage;

import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles['footer']}>
            <span className={styles['links']}>
                <a href="https://github.com/4Marsha1/WikiSearch">Source Code</a> |
                <a href="https://wiki-search-api.netlify.app/">Deployed SIte</a> |
                <a href="https://github.com/4Marsha1/"><i class="fab fa-github"></i>  Github</a> |
                <a href="https://www.linkedin.com/in/abhishek-bharadwaz-458993192/"><i class="fab fa-linkedin"></i>  LinkedIn</a>
            </span>
            <span className={styles['copyright']}>&copy; Abhishek Bharadwaz 2022</span>
        </div>
    );
};

export default Footer;

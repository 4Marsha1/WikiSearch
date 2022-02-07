import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles['footer']}>
            <span className={styles['links']}>
                <a href="#">Source Code</a> |
                <a href="#">Deployed SIte</a> |
                <a href="#"><i class="fab fa-github"></i>  Github</a> |
                <a href="#"><i class="fab fa-linkedin"></i>  LinkedIn</a>
            </span>
            <span className={styles['copyright']}>&copy; Abhishek Bharadwaz 2022</span>
        </div>
    );
};

export default Footer;

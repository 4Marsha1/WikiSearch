import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { ReactComponent as SearchIcon } from '../../icons/search.svg'

const Navbar = ({ keyword, count, handleChange, handleFetch }) => {
    return (
        <div className={styles['navbar']}>
            <div className={styles['logo']}>Wikipedia Search</div>
            <form className={styles['searchbar']}>
                <input
                    type="text"
                    name='keyword'
                    value={keyword}
                    onChange={handleChange}
                    className={styles['search']}
                    placeholder='Search Keywords'
                />
                <input
                    type="number"
                    name='count'
                    value={count}
                    onChange={handleChange}
                    className={styles['count']}
                />
                <SearchIcon className={styles['btn']} onClick={handleFetch} />
            </form>
        </div>
    );
};

export default Navbar;

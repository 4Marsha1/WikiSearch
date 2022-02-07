import React from 'react';
import styles from './Card.module.css';
import img from '../../icons/wikipedia_PNG33.png';

const Card = ({ item }) => {
    return (
        <div className={styles['card']}>
            <div className={styles['left']}>
                {
                    item.thumbnail ? <img className={styles['img']} src={item.thumbnail.source} />
                        : <img className={styles['img']} src={img} />
                }
            </div>
            <div className={styles['right']}>
                <span className={styles['title']}>{item.title}</span>
                <p className={styles['content']}>{item.extract.substring(0, 200)}</p>
            </div>
        </div>
    );
};

export default Card;

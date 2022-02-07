import React from 'react';
import styles from './Cards.module.css';
import Card from '../Card';

const Cards = ({ items }) => {
    return (
        <div className={styles['cards']}>
            {
                items.length > 0 ?
                    items.map(item => {
                        if (item.extract) {
                            return <Card key={item.pageid} item={item} />
                        }
                    })
                    : <></>
            }
        </div>
    );
};

export default Cards;

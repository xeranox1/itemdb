import React from 'react';
import Card from './Card';

const CardList = ({ items }) => {
    return(
        <div>
            {
                items.map((item, i)=> {
                    return (
                        <Card 
                        key={items[i].id}
                        no={items[i].no}
                        price={items[i].price}
                        amount={items[i].amount}
                        img={items[i].img}
                        variation={items[i].variation}
                        />
                    )
                })
                
            }
        </div>
    );
}

export default CardList;
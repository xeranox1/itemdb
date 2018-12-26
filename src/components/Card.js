import React from 'react';
import ColorCircle from './ColorCircle';
const Card = ({id, no, price, amount, img, variation}) => {
    /**
    //  * Number.prototype.format(n, x, s, c)
    //  * 
    //  *integer n: length of decimal
    //  *integer x: length of whole part
    //  *mixed   s: sections delimiter
    //  *mixed   c: decimal delimiter
    //  */

    const format = (number, n, x, s, c) => {
        var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
            num = number.toFixed(Math.max(0, ~~n));
    
        return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
    };

    return (
        <div className='bg-white dib br3 pa3 ma2 mw5 grow bw2 shadow-5'>
            <img alt='pic' src={`http://192.168.0.104:8887/${img}?200x200`} />
            <div className='tc'>
                <h2>{no}</h2>
                <p>{'Harga: Rp.' + format(price, 0, 3, ',')}</p>
                <p>{'Stok: '+amount}</p>
                <div>
                    <h3 className='f4'>Warna:</h3>
                    <ColorCircle colors={variation}/>
                </div>
            </div>
        </div>
    );
}

export default Card;
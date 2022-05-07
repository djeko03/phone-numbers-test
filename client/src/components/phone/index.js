import React from 'react';
import css from './index.module.css';

export const Phone = ({
    phone,
    onClick,
                      }) => {



    return (
        <div className={css.container}>
           <div className={css.country}>
               <p className={css.countryName}>Страна:</p>
               <img
                   className={css.image}
                   src={phone.country === 'Россия' ? "/img/ru.png" : phone.country === 'Азербайджан' ? "/img/aze.png" : "/img/br.png"}
                   width={50}
                   alt=""
               />
               <p className={css.countryPhone}>{phone.country}</p>
           </div>
            <p className={css.phone}>Телефон: {phone.code + ' ' + phone.number}</p>
            <button onClick={onClick} className={css.delete}>Удалить</button>
        </div>
    );
};


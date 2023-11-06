import React from 'react';
import {Link} from 'react-router-dom';

function CardItem({ path, label, src, text }) {
    return (
        <>
            <li className="cards__item">
                {/* By using props, it's taking whatever is added to Cards.jsx, and will be passed down to its component on the screen */}
                <Link to={path} className="cards__item__link">
                    <figure className="cards__item__pic-wrap" data-category={label}>
                        <img
                            src={src}
                            alt="Travel Image"
                            className="cards__item__img"/>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItem;
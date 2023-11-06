import CardItem from "./CardItem.jsx";
import './Cards.css';
import cardImage1 from '../../assets/amsterdamHouse2.jpg';
import cardImage2 from '../../assets/amsterdamHouse2.jpg';
import cardImage3 from '../../assets/amsterdamHouse2.jpg';
import cardImage4 from '../../assets/amsterdamHouse2.jpg';
import cardImage5 from '../../assets/amsterdamHouse2.jpg';


function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={cardImage1}
                            text="Explore the hidden waterfall deep inside the jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src={cardImage2}
                            text="Travel through the islands of Bali on a private cruise"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__item">
                        <CardItem
                            src={cardImage3}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src={cardImage4}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src={cardImage5}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
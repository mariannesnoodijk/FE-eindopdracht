import CardItem from "./PropertyCard.jsx";
import './Properties.css';
import cardImage2 from '../../assets/amsterdamHouse2.jpg';
import PropertyDetail from "../propertyDetail/PropertyDetail.jsx";
import {ListOfProperties} from "../../helpers/ListOfProperties.jsx";
import {Link} from "react-router-dom";
import React from "react";


function Properties() {
    return (
        <>
            <div className="listings__container">
                <h1>Check out these TEST destinations</h1>
                <button type="button">VIEW ALL</button>


            </div>
        </>
    );
}

export default Properties;


// import houseimage1 from '../assets/amsterdamHouse1.jpeg';
// import houseimage2 from '../assets/amsterdamHouse2.jpg';
//
// import './Properties.css';
// import PropertyCard from "./PropertyCard.jsx";
//
//
//
// function Properties() {
//     return (
//         <div className="properties">
//             <h1>Check out our properties</h1>
//             <div className="propertycards__container">
//                 <div className="propertycards__wrapper">
//                     <ul className="propertycards__items">
//                         <PropertyCard
//                             src={houseimage1}
//                             text="Explore the hidden waterfall deep inside the jungle"
//                             label="Adventure"
//                             path="/services"
//                         />
//                         <PropertyCard
//                             src={houseimage2}
//                             text="Travel through the islands of Bali on a private cruise"
//                             label="Luxury"
//                             path="/services"
//                         />
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default Properties;
//
// {/*<main>*/}
// {/*    <section className="homepage-properties-overview">*/}
// {/*        <div className="homepage-properties-top-section">*/}
// {/*            <p>POPULAR PROPERTIES</p>*/}
// {/*            <button className="homepage-properties-btn">*/}
// {/*                VIEW ALL*/}
// {/*            </button>*/}
// {/*        </div>*/}
// {/*<div className="homepage-property-container">*/}
// {/*    <div className="homepage-property-box">*/}
// {/*    {ListOfProperties.map((propertyDetail) => {*/}
// {/*        return (*/}
// {/*            <PropertyDetail*/}
// {/*                key={propertyDetail.id}*/}
// {/*                image={propertyDetail.image}*/}
// {/*                name={propertyDetail.name}*/}
// {/*                price={propertyDetail.price}*/}
// {/*            />*/}
// {/*        );*/}
// {/*    })}*/}
// {/*    </div>*/}
// {/*</div>*/}
// {/*    </section>*/}
// {/*</main>*/}
import './Properties.css';

import cardImage1 from '../../assets/amsterdamHouse2.jpg';
import cardImage2 from '../../assets/amsterdamHouse2.jpg';
import cardImage3 from '../../assets/amsterdamHouse2.jpg';
import cardImage4 from '../../assets/amsterdamHouse2.jpg';
import cardImage5 from '../../assets/amsterdamHouse2.jpg';
import {Link} from "react-router-dom";
import React, {useState} from "react";
import Button from "../button/Button.jsx";
import axios from "axios";
import PropertyCard from "./PropertyCard.jsx";


function Properties() {
    const [properties, setProperties] = useState([]);
    const [error, toggleError] = useState(false);

    async function fetchProperties() {
        toggleError(false);

        try {
            const response = await axios.get('http://localhost:8084/properties');
            console.log(response.data);
            setProperties(response.data);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
            <section className="overview-section outer-content-container">
                <div className="inner-content-container">
                    <div className="general-form-top">
                    <h1>property overview</h1>
                    </div>
                    <main>
                        {properties.map((property) => {
                            return(
                    <PropertyCard
                        key={property.propertyId}
                        // image={cardImage1}
                        label="New"
                        title={`${property.streetname} ${property.housenumber}`}
                        price={property.price}
                        description={property.description}
                    />
                            )
                        })}
                        {/*<PropertyCard*/}
                        {/*    image={cardImage1}*/}
                        {/*    label="New"*/}
                        {/*    title="Singel 12"*/}
                        {/*    price="400"*/}
                        {/*    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et vehicula odio, vitae tempus dui. Morbi metus nibh, vulputate nec gravida nec, fringilla nec ipsum. Fusce luctus enim est, vitae molestie erat ultricies sit amet. Donec in facilisis nibh. Praesent suscipit mattis ex, id rhoncus magna cursus at. Duis ac eros eu erat ullamcorper ultrices. Donec a ornare metus. Phasellus accumsan, neque eu maximus maximus, nibh justo elementum lacus, sed dignissim dolor nisl ut quam. Vivamus nulla tellus, interdum blandit lacus sit amet, iaculis efficitur dui. Suspendisse et quam ut magna blandit auctor. Suspendisse in efficitur urna. Ut rhoncus laoreet."*/}
                        {/*/>*/}
                        {/*<PropertyCard*/}
                        {/*    image={cardImage1}*/}
                        {/*    label="New"*/}
                        {/*    title="Singel 12"*/}
                        {/*    price="400"*/}
                        {/*    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et vehicula odio, vitae tempus dui. Morbi metus nibh, vulputate nec gravida nec, fringilla nec ipsum. Fusce luctus enim est, vitae molestie erat ultricies sit amet. Donec in facilisis nibh. Praesent suscipit mattis ex, id rhoncus magna cursus at. Duis ac eros eu erat ullamcorper ultrices. Donec a ornare metus. Phasellus accumsan, neque eu maximus maximus, nibh justo elementum lacus, sed dignissim dolor nisl ut quam. Vivamus nulla tellus, interdum blandit lacus sit amet, iaculis efficitur dui. Suspendisse et quam ut magna blandit auctor. Suspendisse in efficitur urna. Ut rhoncus laoreet."*/}
                        {/*/>*/}
                        {/*<PropertyCard*/}
                        {/*    image={cardImage1}*/}
                        {/*    label="New"*/}
                        {/*    title="Singel 12"*/}
                        {/*    price="400"*/}
                        {/*    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et vehicula odio, vitae tempus dui. Morbi metus nibh, vulputate nec gravida nec, fringilla nec ipsum. Fusce luctus enim est, vitae molestie erat ultricies sit amet. Donec in facilisis nibh. Praesent suscipit mattis ex, id rhoncus magna cursus at. Duis ac eros eu erat ullamcorper ultrices. Donec a ornare metus. Phasellus accumsan, neque eu maximus maximus, nibh justo elementum lacus, sed dignissim dolor nisl ut quam. Vivamus nulla tellus, interdum blandit lacus sit amet, iaculis efficitur dui. Suspendisse et quam ut magna blandit auctor. Suspendisse in efficitur urna. Ut rhoncus laoreet."*/}
                        {/*/>*/}

                                            </main>
                        <Button type="button" onClick={fetchProperties} variant="primary">view all properties</Button>
                </div>
            </section>
        </>
    );
}

export default Properties;

// return (
//     <>
//         <div className="listings__container">
//             <h1>Check out these TEST destinations</h1>
//             <Link to="/admin">
//                 <Button type="submit" variant="primary">view all</Button>
//             </Link>
//
//
//         </div>
//     </>


//
//
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
//         <div className="admin">
//             <h1>Check out our admin</h1>
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
// //
// // {/*<main>*/}
// // {/*    <section className="homepage-admin-overview">*/}
// // {/*        <div className="homepage-admin-top-section">*/}
// // {/*            <p>POPULAR PROPERTIES</p>*/}
// // {/*            <button className="homepage-admin-btn">*/}
// // {/*                VIEW ALL*/}
// // {/*            </button>*/}
// // {/*        </div>*/}
// // {/*<div className="homepage-property-container">*/}
// // {/*    <div className="homepage-property-box">*/}
// // {/*    {PropertyList.map((propertyDetail) => {*/}
// // {/*        return (*/}
// // {/*            <PropertyDetail*/}
// // {/*                key={propertyDetail.id}*/}
// // {/*                image={propertyDetail.image}*/}
// // {/*                name={propertyDetail.name}*/}
// // {/*                price={propertyDetail.price}*/}
// // {/*            />*/}
// // {/*        );*/}
// // {/*    })}*/}
// // {/*    </div>*/}
// // {/*</div>*/}
// // {/*    </section>*/}
// // {/*</main>*/}
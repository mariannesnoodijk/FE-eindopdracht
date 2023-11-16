import "./PropertyMatching.css";

import React, {useMemo, useRef, useState} from "react";
import TinderCard from "react-tinder-card";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import {Link, useNavigate} from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import image1 from "../../assets/propertyImages/property_1.jpg";
import image2 from "../../assets/propertyImages/property_2.jpg";
import image3 from "../../assets/propertyImages/property_3.jpg";
import image4 from "../../assets/propertyImages/property_4.jpg";
import image5 from "../../assets/propertyImages/property_5.jpg";
import image6 from "../../assets/propertyImages/property_6.jpg";
import image7 from "../../assets/propertyImages/property_7.jpg";
import image8 from "../../assets/propertyImages/property_8.jpg";
import image9 from "../../assets/propertyImages/property_9.jpeg";
import image10 from "../../assets/propertyImages/property_10.jpg";


const slides = [ //creates an array of objects: []=array, [{}]=object within array
    {img: image1, name: "Singel 10, Amsterdam"},
    {img: image2, name: "Kerkstraat 125, Amsterdam"},
    {img: image3, name: "Van Woustraat 69, Amsterdam"},
    {img: image4, name: "Vondelweg 100, Amsterdam"},
    {img: image5, name: "Koninginneweg 253, Amsterdam"},
    {img: image6, name: "Kalverstraat 210, Amsterdam"},
    {img: image7, name: "Leidsestraat 56, Amsterdam"},
    {img: image8, name: "PC Hooftstraat 69, Amsterdam"},
    {img: image9, name: "Noordermarkt 100, Amsterdam"},
    {img: image10, name: "Maasstraat 353, Amsterdam"},
];

function PropertyMatching() {
    const [currentIndex, setCurrentIndex] = useState(slides.length - 1)
    const [lastDirection, setLastDirection] = useState()
    const currentIndexRef = useRef(currentIndex)

    const navigate = useNavigate();

    const childRefs = useMemo(
        () =>
            Array(slides.length)
                .fill(0)
                // TODO: WHAT TO REPLACE I WITH?
                .map((i) => React.createRef()),
        []
    )

    function handleClick() {
        navigate('/viewingsPage')
    }

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    const canGoBack = currentIndex < slides.length - 1

    const canSwipe = currentIndex >= 0

    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
    }

    const outOfFrame = (name, idx) => {
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    }

    const swipe = async (dir) => {
        if (canSwipe && currentIndex < slides.length) {
            await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }
    }

    // increase current index and show card
    const goBack = async () => {
        if (!canGoBack) return
        const newIndex = currentIndex + 1
        updateCurrentIndex(newIndex)
        await childRefs[newIndex].current.restoreCard()
    }

    return (
        <>
            <section className="new-general-form-section outer-content-container">
                <div className="inner-content-container__text-restriction">
                    <div className="general-form-top">
                        <h1>Find your dream home</h1>
                    </div>
                    <div className="general-form">
                        <div className="cardContainer">
                            {slides.map((character, index) => (
                                <TinderCard
                                    ref={childRefs[index]}
                                    className='swipe'
                                    key={character.name}
                                    onSwipe={(dir) => swiped(dir, character.name, index)}
                                    onCardLeftScreen={() => outOfFrame(character.name, index)}
                                >
                                    <div
                                        style={{backgroundImage: 'url(' + character.img + ')'}}
                                        className="card"
                                    >
                                        <h3>{character.name}</h3>
                                    </div>
                                </TinderCard>
                            ))}
                        </div>
                        <div className="buttons-matching">
                            <Button variant="primary" style={{backgroundColor: !canSwipe && '#c3c4d3'}}
                                    onClick={() => swipe('left')}><CloseIcon/></Button>
                            <Button variant="primary" style={{backgroundColor: !canGoBack && '#c3c4d3'}} onClick={() => goBack()}>Undo
                                swipe!</Button>
                            <Button variant="primary" style={{backgroundColor: !canSwipe && '#c3c4d3'}} onClick={handleClick}><CheckIcon/></Button>
                        </div>
                        <div className="sub-message">
                            <p><Link to='/'>Bring me back home</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PropertyMatching;
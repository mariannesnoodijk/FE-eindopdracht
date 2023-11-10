import './PropertyMatching.css';

// export default function PropertyMatching() {
//     // const [error, toggleError] = useState();
//     // const [formState, setFormState] = useState({
//     //     email: '',
//     //     password: '',
//     // });
//
//     return (
//         <>
//         <h1>test</h1>
//         {/*<TinderCard/>*/}
//         </>
//     );
// }

import React, {useMemo, useRef, useState} from 'react'
import TinderCard from 'react-tinder-card'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const db = [
    {
        name: 'Richard Hendricks',
        url: `https://unsplash.com/photos/a-person-swimming-in-the-ocean-near-a-cave-g6Me5mUQQIQ`
    },
    {
        name: 'Erlich Bachman',
        url: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-near-a-cave-g6Me5mUQQIQ'
    },
    {
        name: 'Monica Hall',
        url: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-near-a-cave-g6Me5mUQQIQ'
    },
    {
        name: 'Jared Dunn',
        url: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-near-a-cave-g6Me5mUQQIQ'
    },
    {
        name: 'Dinesh Chugtai',
        url: 'https://unsplash.com/photos/a-person-swimming-in-the-ocean-near-a-cave-g6Me5mUQQIQ'
    }
]

function PropertyMatching() {
    const [currentIndex, setCurrentIndex] = useState(db.length - 1)
    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)

    const childRefs = useMemo(
        () =>
            Array(db.length)
                .fill(0)
                // TODO: WHAT TO REPLACE I WITH?
                .map((i) => React.createRef()),
        []
    )

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    const canGoBack = currentIndex < db.length - 1

    const canSwipe = currentIndex >= 0

    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
    }

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
        // TODO: when quickly swipe and restore multiple times the same card,
        // it happens multiple outOfFrame events are queued and the card disappear
        // during latest swipes. Only the last outOfFrame event should be considered valid
    }

    const swipe = async (dir) => {
        if (canSwipe && currentIndex < db.length) {
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
            <div className='cardContainer'>
                {db.map((character, index) => (
                    <TinderCard
                        ref={childRefs[index]}
                        className='swipe'
                        key={character.name}
                        onSwipe={(dir) => swiped(dir, character.name, index)}
                        onCardLeftScreen={() => outOfFrame(character.name, index)}
                    >
                        <div
                            style={{ backgroundImage: 'url(' + character.url + ')' }}
                            className='card'
                        >
                            <h3>{character.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
            <div className='buttons-matching'>
                <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}><CloseIcon/></button>
                <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button>
                <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}><CheckIcon/></button>
            </div>
        </div>
            </section>
           </>
    )
}

export default PropertyMatching;
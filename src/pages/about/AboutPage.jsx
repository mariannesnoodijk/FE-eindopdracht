import {useNavigate} from "react-router-dom";
import Profilepic from '../../assets/profilepic-yellowdoor.jpg';

function AboutPage() {
    // const navigate = useNavigate();
    //
    // function handleClick() {
    //     navigate('/about');
    // }
    return (
        <>
            <section className="overview-section outer-content-container">
                <div className="inner-content-container">
            <article className="top-section">
               <div className="info-container">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et auctor dui. Suspendisse tincidunt nisi mauris, a blandit purus accumsan eu. Phasellus aliquet congue interdum. In id nibh sit amet lectus maximus iaculis eget sit amet lacus. Sed tempus viverra dolor a malesuada. Aenean scelerisque sollicitudin vehicula. Quisque rhoncus tellus ut dictum hendrerit.
                </p>
               </div>
           <span className="img-wrapper">
               <img src={Profilepic} alt="Profilepic of yellow door" width="100%"/>
           </span>
            </article>
            <div className="bottom-section">
                
            </div>
                </div>
            </section>
        </>
    );
}
export default AboutPage;
import image from "../../assets/img/jair_smile.png";
import "./inMemoryOf.css";

function InMemoryOf() {

    return (
      <>
          <section className="login__section outer-content__container">
              <div className="inner-content-container__text-restriction">
                  <div className="general-form__top-section">
                      <h1>dedicated to jair</h1>
                      <img className="memorypage__img" src={image} alt=""/>
                  </div>
              </div>
          </section>
      </>
    );
}

export default InMemoryOf;
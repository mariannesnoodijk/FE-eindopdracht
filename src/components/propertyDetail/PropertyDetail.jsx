
function PropertyDetail({image, name, price, key} ) {
    return (
        <div className="menuItem" key={key}>
            <img src={image} alt=""/>
            <h1>{name}</h1>
            <p>€{price}</p>
        </div>
    );
}

export default PropertyDetail;
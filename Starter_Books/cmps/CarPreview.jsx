
export function CarPreview({ car }) {

    return (
        <article className="car-preview">
            <h2>Vendor: {car.vendor}</h2>
            <h4>Car Speed: {car.speed}</h4>
            <img src={`../assets/img/${car.vendor}.png`} alt="car-image" />
        </article>
    )
}
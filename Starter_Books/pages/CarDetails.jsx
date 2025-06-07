import { carService } from "../services/car.service.js"

const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function CarDetails() {
    const [car, setCar] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadCar()
    }, [params.carId])

    function loadCar() {
        carService.get(params.carId)
            .then(setCar)
            .catch(err => {
                console.log('err:', err)
            })
    }

    function onBack() {
        navigate('/car')
    }

    console.log('Render', params)
    if (!car) return <div>Loading...</div>
    return (
        <section className="car-details">
            <h1>Car Vendor: {car.vendor}</h1>
            <h1>Car Speed: {car.speed}</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quae fuga eveniet, quisquam ducimus modi optio in alias accusantium corrupti veritatis commodi tenetur voluptate deserunt nihil quibusdam. Expedita, architecto omnis?</p>
            <img src={`../assets/img/${car.vendor}.png`} alt="car-image" />
            <button onClick={onBack}>Back</button>
            <section>
                <Link to={`/car/${car.prevCarId}`}><button>Prev Car</button></Link>
                <Link to={`/car/${car.nextCarId}`}><button>Next Car</button></Link>
            </section>
        </section>
    )
}
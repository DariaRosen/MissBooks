import { CarFilter } from "../cmps/CarFilter.jsx"
import { CarList } from "../cmps/CarList.jsx"
import { carService } from "../services/car.service.js"

const { useEffect, useState } = React


export function CarIndex() {
    const [cars, setCars] = useState(null)
    const [filterBy, setFilterBy] = useState(carService.getDefaultFilter())

    useEffect(() => {
        loadCars()
    }, [filterBy])

    function loadCars() {
        carService.query(filterBy)
            .then(setCars)
            .catch(err => {
                console.log('Problems getting cars:', err)
            })
    }

    function onRemoveCar(carId) {
        carService.remove(carId)
            .then(() => {
                setCars(cars => cars.filter(car => car.id !== carId))
            })
            .catch(err => {
                console.log('Problems removing car:', err)
            })
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }

    if (!cars) return <div>Loading...</div>
    return (
        <section className="car-index">
            <CarFilter onSetFilter={onSetFilter} filterBy={filterBy} />
            <CarList
                cars={cars}
                onRemoveCar={onRemoveCar}
            />

        </section>
    )

}
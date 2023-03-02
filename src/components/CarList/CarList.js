import Car from "../Car/Car";
import { useState } from "react";
import { convertPrice } from "../../utils/currencyUtils";

const CarList = () => {
    const [locale, setLocale] = useState("USA");
    const [ cars, setCars ] = useState([
        {
            id: 1,
            type: "BMW M4",
            color: "Blue",
            price: 70000
        },
        {
            id: 2,
            type: "AC Cobra",
            color: "Red",
            price: 2000000
        },
        {
            id: 3,
            type: "Audi A4",
            color: "Yellow",
            price: 60000
        },
        {
            id: 4,
            type: "Scion FR-S",
            color: "Orange",
            price: 0
        }
    ]);

    const honkHorn = (id) => {
        const car = cars.find((car) => { 
            return car.id === id  
        });

        alert("BEEP BEEP, this is a " + car.type + " and the value is " + car.price);
    }

    const handleRemoveLastCar = () => {
        // 1. Make a copy
        const newCars = [...cars];
        
        // 2. Remove last array item
        newCars.pop();
        
        // 3. Update state with new array
        setCars(newCars);

        /*

        // Alternative solution
        // Filter creates a copy of the array
        const newCars = cars.filter(car => {
            const lastCarId = cars[cars.length - 1].id;
            
            return lastCarId !== car.id
        }); 
        
        */
    }
    
    /**
     * Toggles the locale button to change between CAD and USD pricing
     */
    const renderLocaleButton = () => {
        if (locale === "USA") {
            return <button onClick={() => setLocale("Canada")}>See prices in CAD</button>
        }

        return <button onClick={() => setLocale("USA")}>See prices in USD</button>
        
    }

    /**
     * Paint all cars red by modifying each car object's
     * color property to red
     */
    const handlePaintCarsRed = () => {
        // 1. Copy the array -> handled in map
        const newCars = cars.map(car => {
            // 2. Change the color of all the objects in the array
            // 3. Copy the object, then overwrite one property
            return { ...car, color: "Red" };
        })

        // 4. Set the new cars state 
        setCars(newCars);
    }

    return (
        <section>
            <h2>Cars List</h2>

            {cars.map(car => {
                return <Car 
                    key={car.id} 
                    id={car.id} 
                    type={car.type} 
                    color={car.color}
                    doHonk={honkHorn} 
                    price={convertPrice(car.price, locale)}
                />
            })}

            <button onClick={handleRemoveLastCar}>Remove last car in the list</button>
            <button onClick={handlePaintCarsRed}>Paint all cars red</button>
            {renderLocaleButton()}
        </section>
    );
}

export default CarList;
import { useState } from 'react'
import { drinksArray } from './../../fakeAPI'

const DrinksList = () => {

    const [drinks, setDrinks] = useState(drinksArray)

    return (
        <>
            <h1>Listado de bebidas</h1>
            {
                drinks.map((elm, idx) => {
                    return <p key={idx}>{elm}</p>
                })
            }
        </>
    )
}

export default DrinksList
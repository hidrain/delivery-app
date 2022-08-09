import { useState } from 'react'

export function Categories() {

    const categories = [
        'All',
        'Meat',
        'Vegetarian',
        'Grill',
        'Spicy',
        'Closed'
    ]

    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((value, index) => (
                        <li onClick={() => setActiveIndex(index)}
                            className={activeIndex === index ? "active" : ''} >
                            {value}
                        </li>
                    ))
                }
            </ul>
        </div >
    )
}
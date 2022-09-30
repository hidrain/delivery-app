import { useState } from 'react'

export function Categories({ value, onChangeCategory }) {

    console.log(value)

    const categories = [
        'All',
        'Meat',
        'Vegetarian',
        'Grill',
        'Spicy',
        'Closed'
    ]

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((categoryName, index) => (
                        <li
                            key={index}
                            onClick={() => onChangeCategory(index)}
                            className={value === index ? "active" : ''} >
                            {categoryName}
                        </li>
                    ))
                }
            </ul>
        </div >
    )
}
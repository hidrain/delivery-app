import { useState } from 'react'

export function Categories() {

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианские',
        'Гриль',
        'Острые',
        'Закрытые'
    ]

    const [activeIndex, setActiveIndex] = useState(0)

    const onClickCategory = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((value, index) => (
                        <li onClick={() => (onClickCategory(index))}
                            className={activeIndex === index ? "active" : ''} >
                            {value}
                        </li>
                    ))
                }
            </ul>
        </div >
    )
}
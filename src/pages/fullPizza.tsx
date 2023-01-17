import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { PizzaItemProps } from '../components/cartItem'

export const FullPizza = () => {

    const [pizza, setPizza] = useState<PizzaItemProps>()
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await axios.get(`https://62ff03f741165d66bfc7f607.mockapi.io/items/` + id);
                setPizza(data.items)
            } catch (error) {
                alert('error by getting a pizza')
                navigate('/')
            }
        }
        fetchPizza()
    }, [])

    if (!pizza) {
        return null
    }

    return (
        <div className="container">
            <img src={pizza.imageUrl} alt='image of pizza' />
            <h2>{pizza.title}</h2>
            <p>{pizza.price} ₽</p>
            <Link to="/">
                <button className="button button--outline button--add">
                    <span>Back</span>
                </button>
            </Link>
        </div>
    )
}
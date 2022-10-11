import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


export const FullPizza = () => {

    const [pizza, setPizza] = useState()
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await axios.get(`https://62ff03f741165d66bfc7f607.mockapi.io/items/` + id);
                setPizza(data.items)
                console.log(data)
            } catch (error) {
                alert('error')
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
            <img src={pizza.imageUrl} />
            <h2>{pizza.title}</h2>
            <p>{pizza.price}</p>
        </div>
    )
}
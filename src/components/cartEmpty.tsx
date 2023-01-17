import { Link } from 'react-router-dom'
import cartEmptyImg from '../assets/img/empty-cart.png'

type Props = {}

export const CartEmpty = (props: Props) => {
    return (
        <>
            <div className="cart cart--empty">
                <h2>Cart is empty <span>😕</span></h2>
                <p>You probably haven't ordered pizza yet.
                    <br />To order a pizza go to the main page.
                </p>
                <img src={cartEmptyImg} alt='empty cart' />
                <Link className="button button--black" to="/">
                    <span>Back to home</span>
                </Link>
            </div>
        </>
    )
}
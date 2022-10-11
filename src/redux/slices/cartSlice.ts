import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface CartState {
    totalPrice: number,
    items: any[]
}

const initialState: CartState = {
    totalPrice: 0,
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // addProduct: (state, action: PayloadAction<any>) => {
        //     state.items.push(action.payload)
        //     state.totalPrice += action.payload.price
        // },
        addProduct: (state, action: PayloadAction<any>) => {
            const findItem = state.items.find(obj => obj.id === action.payload.id)

            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum
            }, 0)

            // state.totalPrice += action.payload.price
        },
        plusProduct: (state, action: PayloadAction<any>) => {
            const findItem = state.items.find(obj => obj.id === action.payload)
            if (findItem) {
                findItem.count++
            }
        },
        minusProduct: (state, action: PayloadAction<any>) => {
            const findItem = state.items.find(obj => obj.id === action.payload)
            if (findItem && findItem.count > 0) {
                findItem.count--
            }
        },
        removeProduct: (state, action: PayloadAction<any>) => {
            state.items = state.items.filter(obj => obj.id !== action.payload)
        },
        clearProducts: (state) => {
            state.items = []
            state.totalPrice = 0
        },
    },
})

export const selectCart = (state: RootState) => state.cart
export const selectCartItemById = (id: number) => (state: RootState) =>
    state.cart.items.find(obj => obj.id === id)

export const { addProduct, minusProduct, removeProduct, clearProducts } = cartSlice.actions
export default cartSlice.reducer
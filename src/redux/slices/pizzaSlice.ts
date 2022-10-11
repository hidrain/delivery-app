import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../store'

interface PizzaState {
    items: any[],
    status: any
}

const initialState: PizzaState = {
    items: [],
    status: 'loading' // loading | success | error
}

export type FetchPizzasProps = {
    currentPage: number,
    categoryId: number,
    sort: any
}

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params: FetchPizzasProps) => {
    const { currentPage, categoryId, sort } = params
    const response = await axios.get(`https://62ff03f741165d66bfc7f607.mockapi.io/items?page=${currentPage}&limit=4&${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sort.sortProperty}&order=${sort.order}`)
    return response.data
}
)

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<any>) => {
            state.items = action.payload.items
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state, action) => {
            state.status = 'loading';
            // state.items = [];
        });

        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload.items;
            state.status = 'success';
        });

        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.status = 'error';
            state.items = [];
        });
    },
});

export const selectPizzaData = (state: RootState) => state.pizza

export const { setItems } = pizzaSlice.actions
export default pizzaSlice.reducer
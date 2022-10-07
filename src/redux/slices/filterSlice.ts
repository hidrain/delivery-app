import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface FilterState {
    categoryId: number,
    sort: {
        name: string,
        sortProperty: string,
        order: string
    }
}

const initialState: FilterState = {
    categoryId: 0,
    sort: {
        name: 'rating',
        sortProperty: 'rating',
        order: 'desc'
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload
        },
        setSort: (state, action: PayloadAction<any>) => {
            state.sort = action.payload
        }
        // Use the PayloadAction type to declare the contents of `action.payload`
    },
})

export const { setCategoryId, setSort } = filterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectFilter = (state: RootState) => state.filter.categoryId

export default filterSlice.reducer
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface FilterState {
    searchValue: string,
    categoryId: number,
    sort: {
        name: string,
        sortProperty: string,
        order: string
    },
    currentPage: number
}

const initialState: FilterState = {
    searchValue: '',
    categoryId: 0,
    sort: {
        name: 'rating',
        sortProperty: 'rating',
        order: 'desc'
    },
    currentPage: 1
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        setSort: (state, action: PayloadAction<any>) => {
            state.sort = action.payload
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        }
        // Use the PayloadAction type to declare the contents of `action.payload`
    },
})

export const selectSort = (state: RootState) => state.filter.sort
export const selectFilter = (state: RootState) => state.filter

export const { setCategoryId, setSort, setCurrentPage, setSearchValue } = filterSlice.actions
export default filterSlice.reducer
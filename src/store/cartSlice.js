import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/contant";


export const fetchItem = createAsyncThunk(
    'cart/fetchItem',
    async function () {
        const response = await fetch(`${BASE_URL}/cart.json`)
        const data = await response.json()
        const transformDate=[]
        for(let key in data){
            transformDate.push({
                id:data[key].id,
                title:data[key].title,
                price:data[key].price,
                totalPrice:data[key].totalPrice,
                quantity:data[key].quantity
            })
        }
        return transformDate
    }
)

export const postItem = createAsyncThunk(
    'cart/postItem',
    async function ({title, id, price},{rejectedWithValue,getState}) {
        const item = {
            id: id,
            title: title,
            price: price,
            totalPrice: price,
            quantity: 1
        }
        const response = await fetch(`${BASE_URL}/cart.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(item)
        })
        const data = await response.json()
    }

)
const cartSplice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        status: null,
        error: null
    },
    reducers: {

        addItemToCard(state, action) {
            state.totalQuantity++
            const currentItem = action.payload
            const existingItem = state.items.find(el => el.id === currentItem.id)
            if (!existingItem) {

                state.items.push({
                    id: currentItem.id,
                    title: currentItem.title,
                    price: currentItem.price,
                    totalPrice: currentItem.price,
                    quantity: 1
                })
            } else {
                existingItem.totalPrice += currentItem.price
                existingItem.quantity++
            }
        },
        removeItemToCard(state, action) {
            state.totalQuantity--
            const currentId = action.payload.id

            const existingItem = state.items.find(el => el.id === currentId.id)
            if (existingItem.quantity > 1) {
                existingItem.totalPrice -= existingItem.price
                existingItem.quantity--
            } else {
                state.items = state.items.filter(el => el.id !== currentId)
            }
        }
    },
    extraReducers: {
        [postItem.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [postItem.fulfilled]: (state, {payload}) => {
            state.status = 'resolved'
            state.items = payload
        },
        [postItem.rejected]: (state, {payload}) => {
            state.status = 'rejected'
            state.error = payload
        },
        [fetchItem.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchItem.fulfilled]: (state, {payload}) => {
            state.status = 'resolved'
            state.items = payload
        },
        [fetchItem.rejected]: (state, {payload}) => {
            state.status = 'rejected'
            state.error = payload
        }
    }

})
export const { addItemToCard, removeItemToCard } = cartSplice.actions
export default cartSplice
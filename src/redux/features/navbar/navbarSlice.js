import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-hot-toast";

function fetchFromLocalStorage() {
    let value = localStorage.getItem("value");
    if (value) {
        return JSON.parse(value);
    }
    else {
        return []; 
    }
}

function storeInLocalStorage(data) {
    localStorage.setItem("value", JSON.stringify(data));
}

const initialState = {
    value: fetchFromLocalStorage(),
}

export const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        add: (state, action) => {
            const existingProduct = state.value.find(eachProduct => eachProduct.id === action.payload.id);

            
            if (existingProduct) {
                existingProduct.quantity += 1;
            }

            state.value = [...state.value, { ...action.payload, quantity: 1 }];

            
            const uniqueProducts = state.value.filter((product, index, self) =>
                index === self.findIndex(p => p.id === product.id)
            );

            state.value = uniqueProducts;
            storeInLocalStorage(state.value);
            toast.success("Product is added!");
        },

        remove: (state, action) => {
            const index = state.value.findIndex(product => product.id === action.payload);


            if (index !== -1) {
                state.value.splice(index, 1); 

                storeInLocalStorage(state.value);
                toast.success("Product is removed!");
            }
        },

        removeOne: (state, action) => {
            const index = state.value.findIndex(product => product.id === action.payload);

            if (index !== -1) {
                if (state.value[index].quantity > 1) {
                    // Ürünün adeti 1'den büyükse, adedini azalt
                    state.value[index].quantity -= 1;

                    storeInLocalStorage(state.value);
                    toast.success("Product is removed!");
                }
            }
        }
    },
});

export const { add, remove, removeOne } = navbarSlice.actions;

export default navbarSlice.reducer;

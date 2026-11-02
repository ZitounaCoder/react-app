import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",

    initialState: {
        cartItems: [],
        total: 0
    },

    reducers: {

        addToCart: (state, action) => {
            const item = action.payload;

            const existe = state.cartItems.some(
                produit => produit.id === item.id
            );

            if (existe) {
                state.cartItems = state.cartItems.map(produit =>
                    produit.id === item.id
                        ? {
                            ...produit,
                            quantite: produit.quantite + 1
                        }
                        : produit
                );
            } else {
                state.cartItems.push({
                    ...item,
                    quantite: 1
                });
            }

            state.total += item.price;
        },

        plusQte: (state, action) => {
            const item = action.payload;

            state.cartItems = state.cartItems.map(produit =>
                produit.id === item.id
                    ? {
                        ...produit,
                        quantite: produit.quantite + 1
                    }
                    : produit
            );

            state.total += item.price;
        },

        minusQte: (state, action) => {
            const item = action.payload;

            state.total -= item.price;

            if (item.quantite === 1) {
                state.cartItems = state.cartItems.filter(
                    produit => produit.id !== item.id
                );
            } else {
                state.cartItems = state.cartItems.map(produit =>
                    produit.id === item.id
                        ? {
                            ...produit,
                            quantite: produit.quantite - 1
                        }
                        : produit
                );
            }
        }

    }
});

export const { addToCart, plusQte, minusQte } = cartSlice.actions;

export default cartSlice.reducer;
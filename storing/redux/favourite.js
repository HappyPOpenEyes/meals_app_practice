import {createSlice} from '@reduxjs/toolkit';

const favouriteSlice = createSlice({
    name:"favourites",
    
    initialState: {
        ids:[]
    },
    reducers : {
        addFavourtie : (state, action) => {
            state.ids.push(action.payload.id);
        },

        removeFavourtie : (state,action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
});

export const addFavourite = favouriteSlice.actions.addFavourtie;
export const removeFavourite = favouriteSlice.actions.removeFavourtie;

export default favouriteSlice.reducer;
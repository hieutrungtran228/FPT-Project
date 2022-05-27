import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice =createSlice({
    name : 'Favorite',
    initialState : {
        items : [],
    },
    reducers : {
        Favorite : (state, action) => {
            const {_id} = action.payload
            let newData 
            const item = state.items.find(item => item === _id);
            if(item){
                newData = state.items.filter(item => item !== _id)
            }else{
                newData = [...new Set([_id,...state.items])]
            }
            console.log('newData', newData);
            return {
                ...state,
                items : newData
            }
        }
    },
})

export const { Favorite } = favoriteSlice.actions
export default favoriteSlice.reducer
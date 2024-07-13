import { createSlice } from '@reduxjs/toolkit';
// import produce from '../mockData/';

const initialState = {};
const produceSlice = createSlice({
    name: 'populateProduce',
    initialState,
    reducers: {
        populatedProduce: (state, action) =>({...action.payload})
        // populatedProduce: (state, action) => [{...action.payload[0]},...action.payload]
    }
});

export const { populatedProduce } = produceSlice.actions;
export default produceSlice.reducer;

// const POPULATE = 'produce/populate';

// export const populateProduce = () => ({
//     type: POPULATE,
//     payload: produce
// })

// const produceReducer = (state = {}, action) => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// }

// export default produceReducer;

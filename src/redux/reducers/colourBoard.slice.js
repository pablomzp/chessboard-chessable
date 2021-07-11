import { createSlice, current } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    colour1: {
        backgroundColor: '#F1D9B5',
        
    },
    colour2: {
        backgroundColor: '#B58863',
   },
   colourStyle: 'brown'
}

export const colourBoardSlice = createSlice({
    name: 'colourBoard',
    initialState: INITIAL_STATE,
    reducers: {
        changeColourStyle: (state, action) => {
            const actualState = current(state);
            if (actualState.colourStyle === 'brown') {
                state.colour1.backgroundColor = '#FFFFFF';
                state.colour2.backgroundColor = '#000000';
                state.colourStyle = 'white';
            }
            if (actualState.colourStyle === 'white') {
                state.colour1.backgroundColor = '#F1D9B5';
                state.colour2.backgroundColor = '#B58863';
                state.colourStyle = 'brown';
            }
        }
    }
});

export const { changeColourStyle } = colourBoardSlice.actions;
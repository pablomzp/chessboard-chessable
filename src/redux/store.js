import { configureStore } from "@reduxjs/toolkit";
import { colourBoardSlice } from "./reducers/colourBoard.slice";

export const store = configureStore ({
    reducer: {
        colourBoard: colourBoardSlice.reducer,
    }
});

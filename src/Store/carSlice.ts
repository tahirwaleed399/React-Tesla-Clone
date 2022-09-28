import { createSlice } from '@reduxjs/toolkit';
import { carData  } from '../shared/carInfo'; 
import {Car} from '../Interfaces/car'

let initialState: Car[] = carData;

export const carSlice= createSlice({
        name : 'car',
        initialState,

        reducers : {


        },
    });


    export default carSlice.reducer;
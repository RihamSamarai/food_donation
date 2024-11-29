import React from "react";
import { createContext, useReducer } from "react";


const initailState = {donations: []};
const DonationContext = createContext();


const donationReducer = (state, action) => {

    switch (action.type) {
     case 'ADD_DONATION':
        return {...state, donations: [...state.donations, action.payload]};
     
        default:
            return state;

    }
};


const ContextProvider = ({Children}) => {
    const [state, dispatch] = useReducer(donationReducer, initailState);

    return (

        <DonationContext.Provider value={{ state, dispatch}}>
            {Children}
        </DonationContext.Provider>
    );
};




export { DonationContext, ContextProvider};
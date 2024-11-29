import React from "react";
import { useState, useContext, useCallback } from "react";
import styled from "styled-components";
import { DonationContext } from './ContextProvider';




const FormWrapper = styled.div`
   margin: 20px;

`;



const DonationForm = () => {
     
    const [donation, setDonation] = useState('');
    const {dispatch} = useContext(DonationContext);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_DONATION', payload: donation });
        setDonation('');
    }, [donation, dispatch]);


    return (

        <FormWrapper>
        <h2>Donate Food</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={donation}
            onChange={(e) => setDonation(e.target.value)}
            placeholder="Food item"
            required
          />
          <button type="submit">Donate</button>
        </form>
      </FormWrapper>

    );
};



export default DonationForm;
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";



const ListWrapper = styled.div`
   margin: 20px;
 `;


 const DonationList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(((response) => setItems(response.data.slice(0,5))))
         .catch((error) => console.error(error));
   
    }, []);


    return(
        <ListWrapper>
            <h2>Donations</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>

        </ListWrapper>

    );
 };



 export default DonationList;



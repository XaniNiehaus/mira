import React, {useState} from 'react';
import {Grid} from "@mui/material";
import PolicyCard from "./policyCard";
import {StyledCardContainer} from "./styledCardContainer";

function Item(props) {
    return null;
}

const PolicyCardsContainer = () => {
    const [selectedCards, setSelectedCards] = useState([]);

    const toggleCardSelected = (index) => {

        if (selectedCards.includes(index)) {
            console.log("UNSELECTING CARD!")
            setSelectedCards(selectedCards.filter((i) => (i !== index)))
        } else {
            console.log("SELECTING CARD!")
            setSelectedCards([...selectedCards, index])
        }
    }

    return (
        <StyledCardContainer container spacing={4}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <PolicyCard isSelected={selectedCards.includes(0)} setSelected={() => toggleCardSelected(0)} >xs=8</PolicyCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <PolicyCard isSelected={selectedCards.includes(1)} setSelected={() => toggleCardSelected(1)}>xs=4</PolicyCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <PolicyCard isSelected={selectedCards.includes(2)} setSelected={() => toggleCardSelected(2)}>xs=4</PolicyCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <PolicyCard isSelected={selectedCards.includes(3)} setSelected={() => toggleCardSelected(3)}>xs=8</PolicyCard>
            </Grid>
        </StyledCardContainer>
    );
};

export default PolicyCardsContainer;

import React from 'react';
import {Grid} from "@mui/material";
import PolicyCard from "./policyCard";
import {StyledCardContainer} from "./styledCardContainer";
import MyContext from "../../context/MyContext";

function Item(props) {
    return null;
}

const PolicyCardsContainer = ({selectedPolicies, togglePolicySelected}) => {
    return (
        <MyContext.Consumer>
            {context => (<StyledCardContainer container spacing={4}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <PolicyCard id={0} isSelected={context.policies?.includes(0)} togglePolicySelected={() => context.togglePolicySelected(0)}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <PolicyCard id={1} isSelected={context.policies?.includes(1)} togglePolicySelected={() => context.togglePolicySelected(1)}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <PolicyCard id={2} isSelected={context.policies?.includes(2)} togglePolicySelected={() => context.togglePolicySelected(2)}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <PolicyCard id={3} isSelected={context.policies?.includes(3)} togglePolicySelected={() => context.togglePolicySelected(3)}/>
                </Grid>
            </StyledCardContainer>)}
        </MyContext.Consumer>
    );
};

export default PolicyCardsContainer;

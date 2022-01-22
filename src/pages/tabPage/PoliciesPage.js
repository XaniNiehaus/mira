import React from 'react';
import PolicyCardsContainer from "../../components/policyCard/policyCardsContainer";
import {Fab} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import {StyledPoliciesContainer} from "./StyledPolicyPage";

const PoliciesPage = () => {
    return (
        <StyledPoliciesContainer>
            <Fab className={"fab"} color="primary" aria-label="add">
                <HomeIcon />
            </Fab>
            <PolicyCardsContainer/>
        </StyledPoliciesContainer>
    );
};

export default PoliciesPage;

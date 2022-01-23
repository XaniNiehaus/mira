import React from 'react';
import PolicyCardsContainer from "../../components/policyCard/policyCardsContainer";
import {Fab} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import {StyledPoliciesContainer} from "./StyledPolicyPage";
import MyContext from "../../context/MyContext";
import Badge from '@mui/material/Badge';
import LearnMoreModal from "../../components/learnMoreModal/learnMoreModal";
import SendIcon from '@mui/icons-material/Send';

const PoliciesPage = () => {


    return (
        <MyContext.Consumer>
            {context => (
                <StyledPoliciesContainer>
                    <LearnMoreModal/>
                    <Fab className={"fab"} color="primary" aria-label="add">
                        <Badge className={"badge"} badgeContent={context.policies.length} color="warning">
                            <SendIcon/>
                        </Badge>
                    </Fab>
                    {/*<Fab className={"fab"} color="primary" aria-label="add">*/}
                    {/*    <HomeIcon/>*/}
                    {/*</Fab>*/}
                    <PolicyCardsContainer/>
                </StyledPoliciesContainer>
            )}
        </MyContext.Consumer>
    );
};

export default PoliciesPage;

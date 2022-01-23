import React from 'react';
import Modal from '@mui/material/Modal';
import {StyledModalContent} from "./styledModal";
import MyContext from "../../context/MyContext";

const LearnMoreModal = () => {


    return (
        <MyContext.Consumer>
            {context => (
                <Modal open={context.learnMorePolicy !== false} onClose={() => {
                    context.setLearnMorePolicy(false)
                }}>
                    <StyledModalContent elevation={10}>
                        awe
                    </StyledModalContent>
                </Modal>)
            }
        </MyContext.Consumer>
    );
};

export default LearnMoreModal;

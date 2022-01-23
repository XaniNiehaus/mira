import React from 'react';
import Modal from '@mui/material/Modal';
import {StyledModalContent} from "./styledModal";
import MyContext from "../../context/MyContext";
import Typography from '@mui/material/Typography';
import img from '../../components/policyCard/Warhammer_40000_-_The_God_Emperor_of_Mankind.png'

const LearnMoreModal = () => {


    return (
        <MyContext.Consumer>
            {context => (
                <Modal open={context.learnMorePolicy !== false} onClose={() => {
                    context.setLearnMorePolicy(false)
                }}>
                    <StyledModalContent elevation={10}>
                        <Typography className={"title"} variant={"h3"}>
                            idTitle
                        </Typography>
                        <div className={"contentContainer"}>
                            <img src={img} alt=""/>
                            <Typography className={"text"}>
                                id.more text1
                            </Typography>
                        </div>
                        <div className={"contentContainer secondContainer"}>
                            <img src={img} alt=""/>
                            <Typography className={"text"}>
                                id.more text2
                            </Typography>
                        </div>
                    </StyledModalContent>
                </Modal>)
            }
        </MyContext.Consumer>
    );
};

export default LearnMoreModal;

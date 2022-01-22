import React from 'react';
import Typography from "@mui/material/Typography";
import {StyledHomePage} from "./StyledHomePage";
import {Paper} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';


const HomePage = () => {
    return (
        <StyledHomePage>
            <Typography className={"heading"} variant="h2" gutterBottom>
                Heading
            </Typography>
            <Typography className={"intro"} variant="h5" gutterBottom>
                subheading
            </Typography>
            <div>
                <div className={"block picture-left"}>
                    <div className={"picture-block"}>
                        pictures goes here
                    </div>
                    <Paper elevation={5} className={"text-block"}>
                        <div>
                            <HomeIcon sx={{fontSize: 60}} className={"text-icon"}/>
                        </div>
                        <Typography className={"text-title"} variant="h4" gutterBottom>
                            Title
                        </Typography>
                        <Typography className={"text"} variant="h5" gutterBottom>
                            text
                        </Typography>
                    </Paper>
                </div>
                <div className={"block picture-right"}>
                    <Paper elevation={5} className={"text-block"}>
                        <div>
                            <HomeIcon sx={{fontSize: 60}} className={"text-icon"}/>
                        </div>
                        <Typography className={"text-title"} variant="h4" gutterBottom>
                            Title
                        </Typography>
                        <Typography className={"text"} variant="h5" gutterBottom>
                            text
                        </Typography>
                    </Paper>
                    <div className={"picture-block"}>
                        pictures goes here
                    </div>
                </div>
            </div>
        </StyledHomePage>
    );
};

export default HomePage;

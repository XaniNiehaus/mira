import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CardHeader, CardMedia} from "@mui/material";
import img from "./Warhammer_40000_-_The_God_Emperor_of_Mankind.png"
import {StyledCard} from "./styledCard";
import MyContext from "../../context/MyContext";

const PolicyCard = ({id, isSelected, togglePolicySelected}) => {

    const cardClicked = (e) => {
        togglePolicySelected();
    }


    return (
        <MyContext.Consumer>
            {context =>
                (<StyledCard isSelected={isSelected} onClick={cardClicked} elevation={5}>
                    <CardHeader className={"header"} title="TITLE" subheader="SUBHEADER 14, 2016"/>
                    <CardMedia component="img" height="194" image={img} alt="Paella dish"/>
                    <CardContent>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br/>
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={(e) => {
                            e.stopPropagation();
                            console.log(`Setting learn more to ${id}`)
                            context.setLearnMorePolicy(id);
                        }} size="medium">Learn More</Button>
                    </CardActions>
                </StyledCard>)}
        </MyContext.Consumer>
    );
};

export default PolicyCard;

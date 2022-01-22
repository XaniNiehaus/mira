import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CardHeader, CardMedia} from "@mui/material";
import img from "./Warhammer_40000_-_The_God_Emperor_of_Mankind.png"
import {StyledCard} from "./styledCard";

const PolicyCard = ({setSelected, isSelected}) => {

    const cardClicked = (e)=>{
        setSelected();
    }

    const learnMoreClicked = (e) => {
        e.stopPropagation();
        console.log("LEARN MORE CLICKED");
    }

    return (
        <StyledCard isSelected={isSelected} onClick={cardClicked} elevation={5}>
            <CardHeader className={"header"} title="TITLE" subheader="SUBHEADER 14, 2016"/>
            <CardMedia component="img" height="194" image={img} alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br/>
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={learnMoreClicked} size="medium">Learn More</Button>
            </CardActions>
        </StyledCard>
    );
};

export default PolicyCard;

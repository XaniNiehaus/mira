import {Card} from "@mui/material";
import styled from "styled-components";


const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  background: grey;
  height: 100%;
  max-width: 300px;
  cursor: pointer;
  flex-basis: 300px;
  transition-property: box-shadow, transform;
  transition-duration: 0.3s;
  transition-delay: 0s;
  transform: ${props => props.isSelected ? "scale(1.05)" : ""};
  box-shadow: ${props => props.isSelected ? "0 2px 11px rgb(0,255,0) !important" : ""};

  :hover {
    box-shadow: ${props => props.isSelected ? "0 2px 11px rgb(0,255,0)" : "rgba(0, 0, 0, 0.35) 0px 5px 15px"};
    height: 105%;
    width: 105%;
    flex-basis: 105%;
    max-width: 330px;
    transform: scale(1.05)

  }

  & .header {
    height: 40px;

  }

  & .media {

  }

  & .footerAction {
    
  }
`;

export {StyledCard};

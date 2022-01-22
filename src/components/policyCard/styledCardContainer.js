import {Card} from "@mui/material";
import styled from "styled-components";
import {Grid} from "@mui/material";


const StyledCardContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin-bottom: 100px;
  @media (min-width: 800px) {
    padding: 16px;
  }
  @media (min-width: 1400px) {
    padding: 24px;
  }
  & .MuiGrid-item{
    display: flex;
    flex-basis: 300px;
  }
  & .header {

  }

  & .media {

  }

  & .footerAction {
    
  }
  
`;

export {StyledCardContainer};

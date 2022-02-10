import styled from "styled-components";
import {Paper} from "@mui/material";

const StyledFaqPage = styled(Paper)`
 
  padding: 40px;
  margin: 30px auto 100px auto;
  max-width: 1200px;
  width: 80vw;
  //height: 100%;
  background-color: red;
  border-radius: 20px;
  
  .heading {
    text-align: center;
    margin-bottom: 60px;
    margin-top: 0;
  }

  .faqEntry { 
    margin-bottom: 60px;
    span {
      margin-bottom: 8px;
      font-weight: bold;
      font-size: 20px;
    }
    p {
      margin: 4px 0;
    }
  }

`


export {StyledFaqPage}

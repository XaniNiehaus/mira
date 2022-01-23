import {Paper} from "@mui/material";
import styled from "styled-components";


const StyledModalContent = styled(Paper)`
  width: 80%;
  background-color: grey;
  max-width: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80%;
  max-height: 600px;

  @media (max-width: 500px) {
    //.secondContainer img{
    //  display: none;
    //}
    img {
      margin: 12px;
      border-radius: 8px;
      height: 60% !important;
    }
  }
  
  .title {
    margin: 12px;
    text-align: center;
  }
  
  .contentContainer {
    display: flex;
    width: 100%;
    height: 40%;
    margin-bottom: 12px;
    img {
      margin: 12px;
     border-radius: 8px;
      height: 100%;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 5px;
    }
    .text{
      padding: 20px;
      margin-top: 20px;
    }
  }
`

export {StyledModalContent}

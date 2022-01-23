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
  height: 600px;
`

export {StyledModalContent}

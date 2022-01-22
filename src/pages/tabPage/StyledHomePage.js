import styled from "styled-components";

const StyledHomePage = styled.div`
  background: grey;
  padding: 50px 50px 100px 50px;

  .heading {
    margin-bottom: 50px;
    text-align: center;
  }

  .intro {
    margin-bottom: 50px;
    text-align: center;
  }

  .block {
    width: 100%;
    display: flex;
    position: relative;
    margin-bottom: 32px;

    .picture-block {
      border-radius: 5px;
      background: aqua;
      width: 60%;
      height: 600px;
    }

    .text-block {
      position: absolute;
      background: antiquewhite;
      right: 0;
      bottom: 50%;
      transform: translateY(50%);
      width: 50%;
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      .text-icon {
        margin-top: 20px;
      }
      .text-title {
      }
      .text {
        margin-top: 16px;
      }
    }

    @media (max-width: 800px) {
      margin-bottom: 150px;
      .picture-block {
        background: goldenrod;
        width: 100%;
        height: 400px;
      }
      .text-block {
        width: 80%;
        height: 200px;
        right: 50%;
        bottom: -50%;
        transform: translate(50%, -50%);
        .text-icon {
          font-size: 40px;
        }
        .text-title {
        }
        .text {
          margin-top: 0;
        }
      }
      
    }
  }


`


export {StyledHomePage}

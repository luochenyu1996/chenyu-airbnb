import styled from "styled-components";

export const PictureBrowserWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color:#333;
  
  display: flex;
  flex-direction: column;
  
  .top{
    position: relative;
    height: 86px;
    
    .close-btn{
      position: absolute;
      top:15px;
      right: 25px;
      
    }
  }
  
  .slider{
    position: relative;
    display: flex;
  }
  
`

import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  box-sizing: border-box;
  width: ${props => props.itemWidth};
  padding: 8px;
  margin: 8px 0;
  // flex-shrink 的作用
  flex-shrink: 0;

  .inner {
    //display: flex;
    //flex-flow: wrap;
    //align-items: flex-end;
    width: 100%;
  }

  .cover {
    // TODO 思考让图片对齐的方式
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
     color: ${props => props.verifyColor};
  }

  .name  {
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;  //内容溢出样式
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .button { 
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.text.primaryColor};

    .count {
      margin: 0 2px 0 4px;
    }
    // 这个属性根据 MUI 的源码得出
    .MuiRating-icon {
      
      font-size: 12px;
      margin-right: -2px;
      color: #00848A;
    }
  }
  
  


`

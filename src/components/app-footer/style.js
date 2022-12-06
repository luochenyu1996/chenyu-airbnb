import styled from "styled-components";


export const FooterWrapper = styled.div`
  margin-top: 100px;
  border-top: 1px solid #EBEBEB;
  text-align: center;

  .wrapper {
    width: 1080px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 48px 24px;
  }

  .service {
    display: flex;
    justify-content: center;
    .item {
      //https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex  关于flex 属性的详解
      //该属性是对 flex-grow  flex-shrink  flex-basis 的缩写，当缩写为 1 时，是各子区域进行平分 
      flex: 1;
      .name {
        text-align: center;
        margin-bottom: 16px;
        font-weight: 700;
      }

      .list {
       
        
        .index {
         
          margin-top: 6px;
          color: #767676;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
        //上述 & 的等价写法 
        //.index:hover {
        //  text-decoration: underline;
        //}
        
      }
      
    }
  }


  .statement {
    margin-top: 30px;
    border-top: 1px solid #EBEBEB;
    padding: 20px;
    color: #767676;
  }












`

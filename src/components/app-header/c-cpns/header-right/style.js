import styled from "styled-components";


export const HeaderRightWrapper = styled.div`
  //  向右边靠的布局
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${props => props.theme.text.primaryColor};

  font-weight: 600;


  .btns {
    display: flex;
    align-items: center;

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;

      //图标阴影
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color: ${props => props.theme.text.primaryColor};
    cursor: pointer;
    //头像阴影和动画
    ${props => props.theme.mixin.boxShadow};
  }

  .panel {
    position: absolute;
    right: 0;
    top: 60px;
    width: 240px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 6px rgba(0, 0, 0, .18);
    color: #666;

    .top, .bottom {
      padding: 8px 0;
      .item {
        height: 40px;
        line-height: 40px;
        padding: 0 16px;
        &:hover{
          background-color: #f5f5f5;
        }
      }

    }
    .top{
        border-bottom: 1px solid  #ddd;
    }


  }

`

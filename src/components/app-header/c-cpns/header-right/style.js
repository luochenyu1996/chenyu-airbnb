import styled from "styled-components";




export const HeaderRightWrapper = styled.div`
  //  向右边靠的布局
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${props => props.theme.textColor.primaryColor};
  font-size: 14px;
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
    color: ${props => props.theme.textColor.primaryColor};
    cursor: pointer;
    //头像阴影和动画
    ${props=> props.theme.theme.mixin.boxShadow};
  }

`

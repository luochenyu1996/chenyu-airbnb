import styled from "styled-components";

export const EntirePaginationWrapper = styled.div`

  display: flex;
  justify-content: center;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiPaginationItem-page {
      margin: 0 8px;
      &:hover {
        text-decoration: underline;
      }
    }
    
    .MuiPaginationItem-page.Mui-selected {
      background: #222222;
      color: #fff;


    }
  }

  .desc {
    margin-top: 16px;
    color: #222222;

  }





`

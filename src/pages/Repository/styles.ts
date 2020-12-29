import styled from 'vue-styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
`;

export const RepositoryInfo = styled.div`
  header {
    display: flex;
    align-items: center;
  }

  img{
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  div {
    margin-left: 24px;

    strong{
    font-size: 2.5rem;
    color: #3d3d4d;
    }

    p {
    font-size: 18px;
    color: #737380;
    margin-top: 4px;
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {

      & + li {
        margin-left: 80px;
      }

      strong{
        font-size: 36px;
        color: #3d3d4d;
        display: block;
      }

      span {
        color: #6c6c80;
        display: block;
        margin-top: 4px;
      }
    }
  }
`;

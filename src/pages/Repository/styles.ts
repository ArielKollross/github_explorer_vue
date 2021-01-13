import styled from 'vue-styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.3s;

    &:hover{
      color: #666
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.div`
  margin-top: 80px;

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

export const Issues = styled.div`
  margin-top: 80px;
`;

export const IssuesContent = styled.div`

  a{
    background: #fff;
    border-radius: 5px;
    width: 100%auto;
    padding: 24px;
    display: block;
    text-decoration: none;
    transition: transform 0.3s;
    margin-bottom: 16px;

    display: flex;
    align-items: center;

    & + a {
    margin-bottom: 16px;
    }

    &:hover{
      transform: translateX(20px);
    }

  div{
    margin: 0 16px;
    flex: 1;

    strong{
      font-size: 20px;
      color: #3D3D4D;
    }

    p{
      font-size: 18px;
      color: #A8A8B3;
      margin-top: 4px;
    }
  }

  svg{
    margin-left: auto;
    color: #cbcbd6;
  }
}
`;

export const Loading = styled.div`
  font-size: 28px;
  color: #3D3D4D;
  margin-top: 80px;
  text-align: center;
`;

export const Error = styled.span`
  color: #c53030;
  margin-top: 8px;
  display: block
`;

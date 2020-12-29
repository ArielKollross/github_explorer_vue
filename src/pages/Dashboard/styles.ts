import styled from 'vue-styled-components';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

const FormProps = { hasError: Boolean };

export const Form = styled('form', FormProps)`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #FFF;
    border-right: 0;

    border-color: ${(props) => (props.hasError ? '#C53030' : '#FFF')};

    &::placeholder{
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04D361;
    border: 0;
    border-radius: 0px 5px 5px 0px;
    color: #FFF;
    font-weight: bold;
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;
`;

export const RepositoryContent = styled.div`

  a {
  display: flex;
  align-items: center;

  text-decoration: none;

  background: #FFF;
  border-radius: 5px;
  width: 100% auto;
  padding: 24px;
  margin-bottom: 16px;

  transition: transform 0.3s;

  & + a {
  margin-bottom: 16px;
  }

  :hover {
    transform: translate(20px);
  }

  img {
      border-radius: 50%;
      width: 64px;
      height: 64px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
      font-size: 20px;
      color: #3D3D4D;
      }

      p {
        font-size: 18px;
        color: #A8A8B3;
        margin-top: 4px;
      }

      svg {
        margin-left: auto;
        color: #cbcbd6;
      }
    }
  }
`;

export const Error = styled.span`
  color: #c53030;
  margin-top: 8px;
  display: block
`;

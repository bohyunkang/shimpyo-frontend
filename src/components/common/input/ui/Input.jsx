import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  
  padding: 16px;

  font-size: 16px;

  border: 1px solid ${({ theme }) => theme.colors.miniBorder};
  border-radius: 8px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.miniBorder};
  }

  ::-webkit-outer-spin-button, 
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default Input;

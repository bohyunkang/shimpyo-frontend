import styled from 'styled-components';

const Textarea = styled.textarea`
  width: 100%;
  height: 110px;

  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.miniBorder};
  border-radius: 4px;
  
  resize: none;

  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  ::placeholder {
    color: ${({ theme }) => theme.colors.miniBorder};
  }
`;

export default Textarea;

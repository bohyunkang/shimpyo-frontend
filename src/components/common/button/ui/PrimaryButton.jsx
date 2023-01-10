import styled from 'styled-components';

const PrimaryButton = styled.button`
  width: 100%;
  padding: 20px;

  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.background};

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
`;

export default PrimaryButton;

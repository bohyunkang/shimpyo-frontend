import styled from 'styled-components';

const MoreButton = styled.button`
  width: 100%;
  padding-block: 12px;

  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.textColors.button};

  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.miniBorder};
  border-radius: 8px;
`;

export default MoreButton;

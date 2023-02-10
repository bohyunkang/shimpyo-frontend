import styled from 'styled-components';

const PageSectionTitle = styled.h2`
  padding: ${((props) => (props.top ? '16px 0 0 16px' : '30px 0 10px 16px'))};

  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.5px;

  color: ${({ theme }) => theme.textColors.default};
`;

export default PageSectionTitle;

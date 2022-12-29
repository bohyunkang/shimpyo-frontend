import styled from 'styled-components';

const Title = styled.h1`
  padding-top: 32px;

  font-size: 32px;
  font-weight: 300;
  line-height: 36px;
  letter-spacing: -2px;
  white-space: pre-line;

  color: ${(({ theme }) => theme.textColors.default)};
`;

export default function MainTitle({ title }) {
  return (
    <Title>{title}</Title>
  );
}

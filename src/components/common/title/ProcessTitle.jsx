import styled from 'styled-components';

const Title = styled.h2`
  padding: 16px;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  text-align: center;

  color: ${(({ theme }) => theme.textColors.black)};
`;

export default function ProcessTitle({ title }) {
  return (
    <Title>{title}</Title>
  );
}

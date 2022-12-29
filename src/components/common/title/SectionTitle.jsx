import styled from 'styled-components';

const Title = styled.h3`
  padding: 24px 0 16px;

  font-size: 14px;
  font-weight: 600;
  line-height: 30px;

  color: ${(({ theme }) => theme.textColors.primary)};
`;

export default function SectionTitle({ title }) {
  return (
    <Title>{title}</Title>
  );
}

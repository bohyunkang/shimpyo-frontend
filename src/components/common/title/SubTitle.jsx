import styled from 'styled-components';

const TitleWrapper = styled.div`
  padding: 40px 0 20px;
`;

const Section = styled.h3`
  font-size: 14px;
  font-weight: 600;
  line-height: 30px;

  color: ${(({ theme }) => theme.textColors.primary)};
`;

const Sub = styled.h2`
  font-size: 32px;
  font-weight: 300;
  line-height: 36px;
  letter-spacing: -2px;
  white-space: pre-line;

  color: ${(({ theme }) => theme.textColors.default)};
`;

export default function SubTitle({ section, sub }) {
  return (
    <TitleWrapper>
      <Section>{section}</Section>
      <Sub>{sub}</Sub>
    </TitleWrapper>
  );
}

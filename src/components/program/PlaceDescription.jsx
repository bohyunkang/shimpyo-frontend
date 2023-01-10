import styled from 'styled-components';
import PurpleButton from '../common/button/PurpleButton';

import ProgramSectionTitle from '../common/title/ui/ProgramSectionTitle';

const Container = styled.article`
  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled.div`
  padding: 20px 16px;

  p {
    margin-bottom: 4px;

    font-size: 16px;
    line-height: 24px;

    color: ${({ theme }) => theme.textColors.content};

    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export default function PlaceDescription({ place }) {
  const { description } = place;

  return (
    <Container>
      <ProgramSectionTitle>스테이 소개</ProgramSectionTitle>
      <Content>
        <p>{description}</p>
        <PurpleButton text="더 보기" />
      </Content>
    </Container>
  );
}

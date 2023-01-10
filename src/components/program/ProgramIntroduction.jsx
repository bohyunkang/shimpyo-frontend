import styled from 'styled-components';

import MoreButton from '../common/button/ui/MoreButton';
import ProgramSectionTitle from '../common/title/ui/ProgramSectionTitle';

import CATEGORY_TYPE from '../../constants/category';

const Container = styled.article`
  position: relative;

  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.colors.background};

  img {
    margin-top: 43px;
  }
`;

const Title = styled.h3`
  position: absolute;
  top: 83px;

  padding-left: 16px;

  font-size: 22px;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: -2px;
  white-space: pre-line;

  color: ${(({ theme }) => theme.textColors.default)};
`;

const Content = styled.div`
  padding: 20px 16px;

  p {
    margin-bottom: 30px;

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

export default function ProgramIntroduction({ category }) {
  const [content] = CATEGORY_TYPE.filter((item) => item.type === category);
  const { introduction } = content;

  return (
    <Container>
      <ProgramSectionTitle>프로그램 소개</ProgramSectionTitle>
      <Title>{introduction.title}</Title>
      <img src={introduction.thumbnail} alt="템플스테이 대표 사진" />
      <Content>
        <p>{introduction.content}</p>
        <MoreButton type="button">자세히 보기</MoreButton>
      </Content>
    </Container>
  );
}

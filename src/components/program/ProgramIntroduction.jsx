import styled from 'styled-components';

import { useState } from 'react';
import MoreButton from '../common/button/ui/MoreButton';
import PageSectionTitle from '../common/title/ui/PageSectionTitle';

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
  top: 73px;

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
`;

const Description = styled.p`
  margin-bottom: 30px;

  font-size: 16px;
  line-height: 24px;

  color: ${({ theme }) => theme.textColors.content};

  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.isMore ? '' : 3)};;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export default function ProgramIntroduction({ category }) {
  if (!category) {
    return <p>로딩 중입니다...</p>;
  }

  const [content] = CATEGORY_TYPE.filter((item) => item.type === category);
  const { introduction } = content;

  const [showMore, setShowMore] = useState(false);

  const handleClickMoreButton = () => {
    setShowMore(!showMore);
  };

  return (
    <Container>
      <PageSectionTitle>프로그램 소개</PageSectionTitle>
      <Title>{introduction.title}</Title>
      <img src={introduction.thumbnail} alt="템플스테이 대표 사진" />
      <Content>
        <Description isMore={showMore}>
          {introduction.content}
        </Description>
        <MoreButton
          type="button"
          onClick={handleClickMoreButton}
        >
          {showMore ? '닫기' : '자세히 보기'}
        </MoreButton>
      </Content>
    </Container>
  );
}

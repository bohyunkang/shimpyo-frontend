import { useState } from 'react';
import styled from 'styled-components';

import PageSectionTitle from '../common/title/ui/PageSectionTitle';
import PurpleButton from '../common/button/PurpleButton';

const Container = styled.article`
  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled.div`
  padding: 20px 16px;
`;

const Description = styled.p`
  margin-bottom: 4px;

  font-size: 16px;
  line-height: 24px;

  color: ${({ theme }) => theme.textColors.content};

  white-space: pre-line;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.isMore ? '' : 3)};;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export default function PlaceDescription({ place }) {
  if (!place) {
    return <p>로딩 중입니다..</p>;
  }

  const { description } = place;

  const [showMore, setShowMore] = useState(false);

  const handleClickMoreButton = () => {
    setShowMore(!showMore);
  };

  return (
    <Container>
      <PageSectionTitle>스테이 소개</PageSectionTitle>
      <Content>
        <Description isMore={showMore}>{description}</Description>
        <PurpleButton
          text={showMore ? '닫기' : '더보기'}
          onClick={handleClickMoreButton}
          iconDirection={showMore}
        />
      </Content>
    </Container>
  );
}

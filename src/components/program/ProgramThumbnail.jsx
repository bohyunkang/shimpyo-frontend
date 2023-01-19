import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

import { numberFormat, titleFormat } from '../../utils/format';

import { Marker } from '../../assets/icons/program';

const Container = styled.article`
  position: relative;

  margin-bottom: 20px;
`;

const DescWrapper = styled.div`
  position: absolute;
  bottom: -60px;
  left: 0;
  
  width: 100%;
  padding: 26px 16px;

  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 30px 30px 0 0;
`;

const Title = styled.h1`
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -1px;
`;

const Price = styled.h2`
  margin-bottom: 8px;

  strong {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    vertical-align: middle;
  }
`;

const Address = styled.h5`
  display: inline-block;
  margin-inline: 5px 10px;

  font-size: 14px;
  color: ${({ theme }) => theme.textColors.content};
`;

const StyledHashLink = styled(HashLink)`
  font-size: 14px;
  font-weight: 600;
  color: #A8A8A8;
  text-decoration: underline;
`;

export default function ProgramThumbnail({ program }) {
  const {
    title, price, imageUrl, place,
  } = program;

  if (!place) {
    return <p>로딩 중입니다</p>;
  }

  return (
    <Container>
      <img src={imageUrl} alt="프로그램 썸네일" />
      <DescWrapper>
        <Title>{titleFormat(place.name, title)}</Title>
        <Price>
          <strong>{numberFormat(price)}</strong>
          원
        </Price>
        <div>
          <img src={Marker} alt="지도 마커 아이콘" />
          <Address>{place.address}</Address>
          <StyledHashLink smooth to="#map">지도보기</StyledHashLink>
        </div>
      </DescWrapper>
    </Container>
  );
}

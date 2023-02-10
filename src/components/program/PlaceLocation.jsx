import styled from 'styled-components';

import { phoneNumberFormat } from '../../utils/format';
import { isPickUp } from '../../utils/message';

import PageSectionTitle from '../common/title/ui/PageSectionTitle';
import PurpleButton from '../common/button/PurpleButton';

const Container = styled.article`
  padding-bottom: 20px;

  background-color: ${({ theme }) => theme.colors.background};
`;

const MapWrapper = styled.div`
  width: 390px;
  height: 180px;

  background-color: ${({ theme }) => theme.colors.cardBackground};

  p {
    line-height: 180px;
    text-align: center;

    color: ${({ theme }) => theme.textColors.button};
  }
`;

const DescWrapper = styled.div`
  padding: 20px 16px;
`;

const DescGrid = styled.dl`
  .address {
    grid-template-columns: 40px auto auto;
  }

  .phone-number {
    grid-template-columns: 40px auto;
  }

  .pickUp {
    grid-template-columns: 40px auto;
  }
`;

const DescItemWrapper = styled.div`
  display: grid;

  color: ${({ theme }) => theme.textColors.content};

  dt {
    margin-right: 10px;

    font-weight: 500;
    line-height: 24px;
  }

  dd {
    line-height: 24px;
  }

  & + & {
    margin-top: 6px;
  }
`;

const Button = styled.button`
  justify-self: end;

  font-size: 16px;
  font-weight: 600;

  color: ${({ theme }) => theme.textColors.primary};
`;

export default function PlaceLocation({ place }) {
  if (!place) {
    return <p>로딩 중입니다...</p>;
  }

  const { address, phoneNumber, pickUp } = place;

  return (
    <Container>
      <PageSectionTitle id="map">
        찾아오시는 길
      </PageSectionTitle>
      <MapWrapper>
        {/* TODO: 지도 연동해야 함 */}
        <p>지도 들어갈 자리</p>
      </MapWrapper>
      <DescWrapper>
        <DescGrid>
          <DescItemWrapper className="address">
            <dt>주소</dt>
            <dd>{address}</dd>
            <Button type="button">주소복사</Button>
          </DescItemWrapper>
          <DescItemWrapper className="phone-number">
            <dt>전화</dt>
            <dd>{phoneNumberFormat(phoneNumber)}</dd>
          </DescItemWrapper>
          <DescItemWrapper className="pickUp">
            <dt>픽업</dt>
            <dd>{isPickUp(pickUp)}</dd>
          </DescItemWrapper>
        </DescGrid>
        <PurpleButton text="대중교통 길 찾기" />
      </DescWrapper>
    </Container>
  );
}

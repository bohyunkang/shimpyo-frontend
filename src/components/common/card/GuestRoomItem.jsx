import styled from 'styled-components';
import { numberFormat } from '../../../utils/format';

import CounterMinusButton from '../button/CounterMinusButton';
import CounterPlusButton from '../button/CounterPlusButton';

const ItemWrapper = styled.li`
  display: flex;
  
  position: relative;

  & + & {
    margin-top: 30px;
  }
`;

const ImageWrapper = styled.div`
  width: 134px;
  height: 110px;

  overflow: hidden;
  border-radius: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-inline: 14px;
  padding-block: 6px 4px;

  h4 {
    margin-bottom: 6px;

    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
  }

  h5 {
    font-size: 12px;
    color: ${({ theme }) => theme.textColors.lightGray};
  }
`;

const CounterWrapper = styled.div`
  span {
    font-size: 10px;
    font-weight: 600;
    margin-inline: 12px;
  }
`;

const PriceWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  padding-bottom: 2px;

  text-align: right;

  h4 {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 600;
  }
`;

const AvailableRoom = styled.span`
  padding: 2px;
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.textColors.white};
  background-color: ${((props) => (props.available === 1 ? props.theme.colors.primary : '#242424'))};
  text-align: center;
`;

export default function GuestRoomItem({ room }) {
  const {
    name, standard, maximum, available, price, imageUrl,
  } = room;

  return (
    <ItemWrapper>
      <ImageWrapper>
        <img src={imageUrl} alt={`${name} 대표 사진`} />
      </ImageWrapper>
      <DescWrapper>
        <div>
          <h4>{name}</h4>
          <h5>{`기준 ${standard}인 / 최대 ${maximum}인`}</h5>
        </div>
        <CounterWrapper>
          <CounterMinusButton size="small" disabled />
          <span>0</span>
          <CounterPlusButton size="small" />
        </CounterWrapper>
      </DescWrapper>
      <PriceWrapper>
        <AvailableRoom available={available}>
          {`남은 객실 ${available}개`}
        </AvailableRoom>
        <h4>{`${numberFormat(price)}원`}</h4>
      </PriceWrapper>
    </ItemWrapper>
  );
}

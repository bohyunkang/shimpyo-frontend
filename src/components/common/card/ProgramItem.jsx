import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Image from '../../../assets/mocks/백련사.png';

import { titleFormat, numberFormat, shortAddressFormat } from '../../../utils/format';

const ItemWrapper = styled.li`
  width: 358px;
  overflow: hidden;

  border-radius: 8px;
`;

const ImageWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 220px;
  overflow: hidden;

  img {
    position: absolute;
    top: -90%;
    left: -5%;
  }
`;

const DescWrapper = styled.div`
  padding: 16px 12px;

  background-color: ${(({ theme }) => theme.colors.background)};
`;

const Title = styled.h4`
  margin-bottom: 8px;

  font-size: 16px;
`;

const PriceAndAddress = styled.div`
  display: flex;
  align-items: baseline;

  h5 {
    padding-right: 10px;
    font-size: 16px;
    line-height: 15px;

    border-right: 2px solid ${(({ theme }) => theme.colors.miniBorder)};

    strong {
      font-size: 18px;
      font-weight: 600;
    }
  }

  address {
    padding-left: 10px;
    font-size: 12px;
  }
`;

export default function ProgramItem({ program }) {
  const {
    id, location, title, price, address,
  } = program;

  return (
    <Link to={`/programs/${id}`}>
      <ItemWrapper>
        <ImageWrapper>
          <img src={Image} alt="프로그램 썸네일" />
        </ImageWrapper>
        <DescWrapper>
          <Title>{titleFormat(location, title)}</Title>
          <PriceAndAddress>
            <h5>
              <strong>{numberFormat(price)}</strong>
              원
            </h5>
            <address>{shortAddressFormat(address)}</address>
          </PriceAndAddress>
        </DescWrapper>
      </ItemWrapper>
    </Link>
  );
}

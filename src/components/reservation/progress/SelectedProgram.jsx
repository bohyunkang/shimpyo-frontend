import styled from 'styled-components';

import Image from '../../../assets/mocks/백련사.png';
import { lineBreakFormat } from '../../../utils/format';
import PageSectionTitle from '../../common/title/ui/PageSectionTitle';

const Container = styled.article`
  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled.div`
  padding: 20px 16px 32px;
`;

const ImageTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  width: 88px;
  height: 88px;
  overflow: hidden;

  border-radius: 8px;

  img {
    width: 100%;
  }
`;

const TitleWrapper = styled.div`
  h3 {
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -1px;
    white-space: pre-line;
  }

  h4 {
    margin-block: 4px 10px;
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-size: 12px;
    color: ${({ theme }) => theme.textColors.lightGray};
  }
`;

const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  margin-block: 18px 20px;
  padding: 10px 16px;
  
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.cardBackground};

  p {
    width: 260px;

    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.5px;
  }

  button {
    font-size: 12px;
    color: ${({ theme }) => theme.textColors.lightGray};
  }
`;

const PriceWrapper = styled.dl`
  display: flex;
  justify-content: space-between;
  
  dt, dd {
    font-size: 16px;
    font-weight: 600;
  }
`;

export default function SelectedProgram() {
  const title = '[백련사] 따뜻한 위로의 차담, 만덕산 옛길 산책';

  return (
    <Container>
      <PageSectionTitle top>선택 상품 정보</PageSectionTitle>
      <Content>
        <ImageTitleWrapper>
          <ImageWrapper>
            <img src={Image} alt="프로그램 대표 사진" />
          </ImageWrapper>
          <TitleWrapper>
            {/* TODO: 쉼표(breakpoint)가 없는 경우에 어떻게 해야할지 고민 필요 */}
            <h3>{lineBreakFormat(title, ',')}</h3>
            <h4>70,000원</h4>
            <p>체크인 2023.01.09 (월) - 체크아웃 2023.01.10 (화)</p>
          </TitleWrapper>
        </ImageTitleWrapper>
        <OptionWrapper>
          <p>객실 정보: 선화당 1인실 (성인 1명 아동 0명) / 1개 (+10,000원)</p>
          {/* TODO: 수정 버튼 클릭 시 객실 선택 페이지로 리다이렉트시켜야 함 */}
          <button type="button">수정</button>
        </OptionWrapper>
        <PriceWrapper>
          <dt>예약 금액</dt>
          <dd>80,000원</dd>
        </PriceWrapper>
      </Content>
    </Container>
  );
}

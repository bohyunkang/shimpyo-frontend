/* eslint-disable jsx-a11y/label-has-associated-control */

import styled from 'styled-components';
import ProgramSectionTitle from '../common/title/ui/ProgramSectionTitle';

const Container = styled.article`
  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled.div`
  padding: 20px 16px 40px;
`;

const SelectBoxWrapper = styled.div`

`;

const InputWrapper = styled.div`
  // TODO: 임시 스타일링이니 지워야 할 것!
  input {
    border: 1px solid black;
  }
`;

export default function PromotionPayment() {
  return (
    <Container>
      <ProgramSectionTitle>할인 수단 선택</ProgramSectionTitle>
      <Content>
        <SelectBoxWrapper>
          <label htmlFor="coupon-select">
            <h4>할인쿠폰</h4>
            <p>
              적용 가능
              {' '}
              <strong>1</strong>
              장
            </p>
          </label>
          <select
            name="coupons"
            id="coupon-select"
          >
            <option value="">
              사용할 쿠폰을 선택해주세요
            </option>
            <option value="welcome">
              <h5>[신규회원] 웰컴쿠폰</h5>
              <span>-5,000원</span>
            </option>
          </select>
        </SelectBoxWrapper>
        <InputWrapper>
          <div>
            <h4>포인트</h4>
            <p>
              보유 포인트
              {' '}
              <strong>0P</strong>
            </p>
          </div>
          <div>
            <input type="text" />
            <button type="button">전액사용</button>
          </div>
        </InputWrapper>
      </Content>
    </Container>
  );
}

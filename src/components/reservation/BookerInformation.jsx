import styled from 'styled-components';
import Input from '../common/input/ui/Input';
import ProgramSectionTitle from '../common/title/ui/ProgramSectionTitle';

const Container = styled.article`
  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled.div`
  padding: 20px 16px 40px;
`;

const InputWrapper = styled.div`
  & + & {
    margin-top: 30px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Message = styled.p`
  margin-top: 12px;

  font-size: 12px;
  line-height: 18px;
  text-align: right;
  color: ${({ theme }) => theme.textColors.lightGray};
`;

export default function BookerInformation() {
  return (
    <Container>
      <ProgramSectionTitle>예약자 정보</ProgramSectionTitle>
      <Content>
        <InputWrapper>
          <Label htmlFor="input-name">예약자 성명</Label>
          <Input
            id="input-name"
            name="input-name"
            type="text"
            placeholder="실명으로 적어주세요"
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="input-phone-number">휴대전화번호</Label>
          <Input
            id="input-phone-number"
            name="input-phone-number"
            type="number"
            placeholder="-없이 번호만 입력하세요"
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="input-email">이메일</Label>
          <Input
            id="input-email"
            name="input-email"
            type="text"
            placeholder="id@site.com"
          />
        </InputWrapper>
        <Message>위의 메일로 예약 확정 안내 사항이 전송됩니다.</Message>
      </Content>
    </Container>
  );
}

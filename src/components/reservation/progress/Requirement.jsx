import styled from 'styled-components';

import PageSectionTitle from '../../common/title/ui/PageSectionTitle';
import Textarea from '../../common/input/ui/Textarea';

const Container = styled.article`
  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled.div`
  padding: 20px 16px 40px;
`;

const TextareaWrapper = styled.div``;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Message = styled.p`
  margin-top: 12px;

  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.textColors.lightGray};
`;

export default function Requirement() {
  return (
    <Container>
      <PageSectionTitle>요청 사항</PageSectionTitle>
      <Content>
        <TextareaWrapper>
          <Label htmlFor="textarea-requirement">별도 요청사항</Label>
          <Textarea
            id="textarea-requirement"
            name="textarea-requirement"
            placeholder="ex. 베개를 하나씩 더 부탁드립니다."
          />
        </TextareaWrapper>
        <Message>
          요청사항은 해당 숙소에 전달되지만 숙소 사정에 따라 필요하신 내용이 이루어지지 않을 수 있으니 많은 양해 바랍니다.
        </Message>
      </Content>
    </Container>
  );
}

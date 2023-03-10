import styled from 'styled-components';

import { timeFormat } from '../../utils/format';

import PLACE_OFFERS from '../../constants/placeOffers';
import PageSectionTitle from '../common/title/ui/PageSectionTitle';

const Container = styled.article`
  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.colors.background};
`;

const Offers = styled.div`
  padding-bottom: 40px;
`;

const ServiceList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px 0;

  padding: 48px 16px 0;

  li {
    width: 82px;

    text-align: center;

    p {
      margin-top: 12px;

      font-size: 14px;

      color: ${({ theme }) => theme.textColors.content};
    }
  }
`;

const IconWrapper = styled.div`
  height: 40px;
  line-height: 40px;

  img {
    vertical-align: middle;
  }
`;

const Rules = styled.div`
  padding-bottom: 40px;
`;

const TableWrapper = styled.div`
  padding: 16px 22px 30px;
`;

const Table = styled.table`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;

  th, td {
    width: 173px;
    padding: 12px;

    font-weight: 500;
    text-align: center;

    color: ${({ theme }) => theme.textColors.content};
  }

  thead tr {
    background-color: ${({ theme }) => theme.colors.border};
  }

  tbody tr {
    background-color: #F0F0F0;
  }

  th {
    font-size: 15px;
  }

  td {
    font-size: 14px;
  }
`;

const RuleList = styled.ul`
  padding-inline: 16px;

  font-size: 16px;
  line-height: 24px;
  
  color: ${({ theme }) => theme.textColors.content};
`;

const RuleItem = styled.li`
  display: flex;

  gap: 6px;
`;

export default function PlaceOffersAndRules({ offers, time, rules }) {
  if (!offers || !time || !rules) {
    return <p>로딩 중 입니다..</p>;
  }

  const services = PLACE_OFFERS.filter((item) => offers.includes(item.name));
  const { checkInStart, checkInEnd, checkOut } = time;

  return (
    <Container>
      <Offers>
        <PageSectionTitle>편의시설 및 서비스</PageSectionTitle>
        <ServiceList>
          {services.map((service) => (
            <li key={service.id}>
              <IconWrapper>
                <img src={service.icon} alt={service.name} />
              </IconWrapper>
              <p>{service.name}</p>
            </li>
          ))}
        </ServiceList>
      </Offers>
      <Rules>
        <PageSectionTitle>이용규칙</PageSectionTitle>
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>체크인</th>
                <th>체크아웃</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`${timeFormat(checkInStart)} - ${timeFormat(checkInEnd)}`}</td>
                <td>
                  {timeFormat(checkOut)}
                  {' '}
                  이전
                </td>
              </tr>
            </tbody>
          </Table>
        </TableWrapper>
        <RuleList>
          {rules.map((rule) => (
            <RuleItem key={rule}>
              <span>·</span>
              <p>{rule}</p>
            </RuleItem>
          ))}
        </RuleList>
      </Rules>
    </Container>
  );
}

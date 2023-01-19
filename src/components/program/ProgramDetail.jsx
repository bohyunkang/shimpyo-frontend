import styled from 'styled-components';

import BackButton from '../common/button/BackButton';
import ProgramThumbnail from './ProgramThumbnail';
import DateSetting from './DateSetting';
import ProgramIntroduction from './ProgramIntroduction';
import PlaceDescription from './PlaceDescription';
import PlaceOffersAndRules from './PlaceOffersAndRules';
import PlaceLocation from './PlaceLocation';
import ReservationButton from './ReservationButton';

import useProgramStore from '../../hooks/useProgramStore';

export default function ProgramDetail() {
  const programStore = useProgramStore();

  const { program } = programStore;

  if (!program) {
    return <p>로딩 중입니다..</p>;
  }

  return (
    <Container>
      <BackButtonWrapper>
        <BackButton color="white" />
      </BackButtonWrapper>
      <ProgramThumbnail program={program} />
      <DateSetting />
      <ProgramIntroduction category={program.category} />
      <PlaceDescription place={program.place} />
      <PlaceOffersAndRules
        offers={program.offers}
        time={program.place}
        rules={program.rules}
      />
      <PlaceLocation place={program.place} />
      <ReservationButton id={program.id} />
    </Container>
  );
}

const Container = styled.article`
  position: relative;
  padding-bottom: 111px;

  background-color: ${({ theme }) => theme.colors.cardBackground};
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;

  z-index: 1;
`;

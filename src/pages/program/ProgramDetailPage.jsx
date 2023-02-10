import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useProgramStore from '../../hooks/useProgramStore';
import useReservationStore from '../../hooks/useReservationStore';

import Layout from '../../layouts/Layout';
import ProgramDetail from '../../components/program/ProgramDetail';

export default function ProgramDetailPage() {
  const programStore = useProgramStore();
  const reservationStore = useReservationStore();

  const { id } = useParams();

  useEffect(() => {
    programStore.fetchProgram({ id });
    // TODO: 만약 예약을 진행하다가 뒤로 가기 버튼으로 해서 오게 된다면 location.state를 받아서 해당 페이지로 다시 갈 수 있게끔 navigate해야 한다.
    reservationStore.resetCurrentProcess();
  }, []);

  return (
    <Layout>
      <ProgramDetail />
    </Layout>
  );
}

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useProgramStore from '../../hooks/useProgramStore';

import Layout from '../../layouts/Layout';
import ProgramDetail from '../../components/program/ProgramDetail';

export default function ProgramDetailPage() {
  const programStore = useProgramStore();

  const { id } = useParams();

  useEffect(() => {
    programStore.fetchProgram({ id });
  }, []);

  return (
    <Layout>
      <ProgramDetail />
    </Layout>
  );
}

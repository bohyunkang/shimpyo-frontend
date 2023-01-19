import { useEffect } from 'react';

import useProgramStore from '../../hooks/useProgramStore';

import Layout from '../../layouts/Layout';
import Category from '../../components/category/Category';

export default function CategoryPage() {
  const programStore = useProgramStore();

  useEffect(() => {
    programStore.fetchPrograms();
  }, []);

  return (
    <Layout bottomNav>
      <Category />
    </Layout>
  );
}

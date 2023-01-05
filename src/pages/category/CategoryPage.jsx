import { useEffect } from 'react';

import useProgramStore from '../../hooks/useProgramStore';

import Category from '../../components/category/Category';
import Layout from '../../layouts/Layout';

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

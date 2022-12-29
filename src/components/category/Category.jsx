import styled from 'styled-components';

import BackButton from '../common/button/BackButton';
import SearchInput from '../common/input/SearchInput';
import MainTitle from '../common/title/MainTitle';
import SectionTitle from '../common/title/SectionTitle';
import SubTitle from '../common/title/SubTitle';
import ProgramList from '../common/card/ProgramList';
import CategoryTypes from './CategoryTypes';
import MoreCategory from './MoreCategory';

const CategoryWrapper = styled.article`
  padding-bottom: 87px;
`;

const LayoutWrapper = styled.div`
  padding-top: 8px;
  padding-inline: 16px;
`;

const BackAndSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default function Category() {
  return (
    <CategoryWrapper>
      <LayoutWrapper>
        <BackAndSearch>
          <BackButton color="black" />
          <SearchInput />
        </BackAndSearch>
        <MainTitle title={'여기서 한 눈에\n확인하세요'} />
        <SectionTitle title="카테고리" />
        <CategoryTypes />
        <SectionTitle title="더보기" />
        <MoreCategory />
        <SubTitle
          section="전체 프로그램"
          sub={'힐링이 필요한\n보니님을 위해서'}
        />
      </LayoutWrapper>
      <ProgramList />
    </CategoryWrapper>
  );
}

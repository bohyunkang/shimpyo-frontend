import styled from 'styled-components';

import useProgramStore from '../../hooks/useProgramStore';

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
  // TODO: 닉네임은 유저의 닉네임을 가지고 와야 한다.
  const nickname = '보니';

  const programStore = useProgramStore();

  const { programs } = programStore;

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
          sub={`힐링이 필요한\n${nickname}님을 위해서`}
        />
      </LayoutWrapper>
      <ProgramList programs={programs} />
    </CategoryWrapper>
  );
}

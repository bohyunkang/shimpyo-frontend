import styled from 'styled-components';

import { Search } from '../../../assets/icons/input';

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledSearchInput = styled.input`
  ${(({ theme }) => theme.searchField())};
  padding-left: 40px;

  font-size: 14px;
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 0;
  left: 16px;

  padding-block: 12px;
`;

export default function SearchInput() {
  return (
    <InputWrapper>
      <StyledSearchInput
        type="text"
        placeholder="어떤 힐링을 해볼까요?"
        name="힐링 프로그램 검색"
      />
      <SearchIcon src={Search} alt="힐링 프로그램 검색 아이콘" />
    </InputWrapper>
  );
}

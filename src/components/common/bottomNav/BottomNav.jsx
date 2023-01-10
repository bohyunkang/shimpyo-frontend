import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import NAV_ITEM from '../../../constants/bottomNav';

const ListWrapper = styled.ul`
  ${(({ theme }) => theme.flexBox('', 'space-between'))};

  width: 390px;
  padding: 15px 15px 25px 15px;

  position: fixed;
  bottom: 0;
  z-index: 1;

  border-top: 1px solid ${(({ theme }) => theme.colors.border)};
  background-color: ${(({ theme }) => theme.colors.background)};
`;

const ItemWrapper = styled.li`
  width: 80px;
`;

const StyledLink = styled(Link)`
  ${(({ theme }) => theme.flexBox('column'))};
`;

const IconWrapper = styled.div`
  width: 22px;
  height: 22px;

  img {
    width: 100%;
    height: 100%;
  }
  
`;
const TitleWrapper = styled.div`
  margin-top: 8px;

  span {
    ${(props) => (props.selected ? props.theme.b4Bold() : props.theme.b4())};
    color: ${((props) => (props.selected ? props.theme.textColors.primary : props.theme.textColors.default))}
  }
`;

export default function BottomNav() {
  const location = useLocation();
  const { pathname } = location;

  const isActive = (item) => (
    pathname === item.path
      ? item.activeIcon
      : item.inactiveIcon
  );

  return (
    <ListWrapper>
      {NAV_ITEM.map((item) => (
        <ItemWrapper key={item.id}>
          <StyledLink to={item.path}>
            <IconWrapper>
              <img src={isActive(item)} alt={`${item.name} 아이콘`} />
            </IconWrapper>
            <TitleWrapper selected={pathname === item.path}>
              <span>{item.name}</span>
            </TitleWrapper>
          </StyledLink>
        </ItemWrapper>
      ))}
    </ListWrapper>
  );
}

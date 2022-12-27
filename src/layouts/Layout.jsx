import styled from 'styled-components';
import BottomNav from '../components/common/bottomNav/BottomNav';
import Header from '../components/common/header/Header';

const Container = styled.article`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  width: 390px;

  background-color: ${(({ theme }) => theme.colors.background)};
`;

export default function Layout({ children, header, bottomNav }) {
  return (
    <Container>
      <Wrapper>
        {header && <Header />}
        {children}
        {bottomNav && <BottomNav />}
      </Wrapper>
    </Container>
  );
}

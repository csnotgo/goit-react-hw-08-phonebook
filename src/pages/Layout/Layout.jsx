import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Loader } from 'components/Loader/Loader';
import { Container } from './Layout.styled';

const Layout = () => {
  const isLogin = useSelector(state => state.user.isLogged);
  const isRefreshing = useSelector(state => state.user.isRefreshing);

  return (
    <Container>
      <header
        style={{
          display: 'flex',
          justifyContent: `${
            isLogin || isRefreshing ? 'space-between' : 'center'
          }`,
        }}
      >
        <h1>Phonebook</h1>
        {isLogin && <UserMenu />}
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;

import { Outlet } from 'react-router';
import PageLayout from '~/layouts/PageLayout';

const Todos = () => {
  return (
    <PageLayout title="Todos">
      <Outlet />
    </PageLayout>
  );
};

export default Todos;

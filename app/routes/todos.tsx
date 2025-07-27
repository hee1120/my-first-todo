import { Outlet, type LoaderFunctionArgs } from 'react-router';
import { supabase } from '~/utils/supabase';
import PageLayout from '~/layouts/PageLayout';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { data: todos, error } = await supabase.from('todos').select('*');
  if (error) {
    throw new Error('Failed to fetch todos');
  }
  return todos;
};

const Todos = () => {
  return (
    <PageLayout title="Todos">
      <Outlet />
    </PageLayout>
  );
};

export default Todos;

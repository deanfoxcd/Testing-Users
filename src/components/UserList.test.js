import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

test('render one row per user', () => {
  const users = [
    { name: 'dean', email: 'dean@dean.com' },
    { name: 'belle', email: 'belle@belle.com' },
  ];

  const { container } = render(<UserList users={users} />);

  // const rows = within(screen.getByTestId('users')).getAllByRole('row');
  const rows = container.querySelectorAll('tbody tr');

  expect(rows).toHaveLength(2);
});

test('render name and email for each user', () => {
  const users = [
    { name: 'dean', email: 'dean@dean.com' },
    { name: 'belle', email: 'belle@belle.com' },
  ];

  render(<UserList users={users} />);

  screen.logTestingPlaygroundURL();
});

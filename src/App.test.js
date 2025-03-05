import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';
// import test from 'node:test';

test('can receive a new user and show it on a list', () => {
  render(<App />);

  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });

  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });

  const button = screen.getByRole('button');

  user.click(nameInput);
  user.keyboard('Isabelle');
  user.click(emailInput);
  user.keyboard('belle@test.com');

  user.click(button);

  const name = screen.getByRole('cell', { name: 'Isabelle' });
  const email = screen.getByRole('cell', { name: 'belle@test.com' });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});

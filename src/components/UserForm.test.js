import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows 2 inputs and a button', () => {
  // Render component
  render(<UserForm />);

  // Manipulate the component or find an element in it
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // Assertion - make sure it's doing what we want it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('onUserAdd function gets called when form is submitted', () => {
  const mock = jest.fn();

  render(<UserForm onUserAdd={mock} />);

  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });
  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });

  user.click(nameInput);
  user.keyboard('dean');
  user.click(emailInput);
  user.keyboard('test@test.com');

  const button = screen.getByRole('button');
  user.click(button);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: 'dean', email: 'test@test.com' });
});

test('that textboxes empty after form submission', () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });
  const emailInput = screen.getByRole('textbox', {
    name: /email/i,
  });

  user.click(nameInput);
  user.keyboard('dean');
  user.click(emailInput);
  user.keyboard('test@test.com');

  const button = screen.getByRole('button');
  user.click(button);

  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
});

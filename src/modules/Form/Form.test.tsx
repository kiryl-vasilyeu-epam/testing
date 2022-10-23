import Form from './Form';
import { render, screen, fireEvent } from '@testing-library/react';

jest.mock('../../components', () => ({
  ...jest.requireActual('../../components'),
  Input: ({ title, onChange }: any) => (
    <label>
      {title}
      <input onChange={(e) => onChange(e.target.value)}></input>
    </label>
  ),
  Result: ({name, surname}: any) => <div>{name + surname}</div>,
}))

const setup = () => {
  const utils = render(<Form />)

  return utils;
}

describe('Form component', () => {

  it('input event change state', () => {
    setup();
    const nameInput = screen.getByLabelText<HTMLInputElement>('Name');
    const surnameInput = screen.getByLabelText<HTMLInputElement>('Surname');

    expect(nameInput).toBeInTheDocument();
    expect(surnameInput).toBeInTheDocument();

    const nameValue = 'nameValue';
    const surnameValue = 'surnameValue';

    fireEvent.change(nameInput, { target: { value: nameValue } });
    fireEvent.change(surnameInput, { target: { value: surnameValue } });

    const resultText = screen.getByText(nameValue + surnameValue);
    expect(resultText).toBeInTheDocument();
  })
});
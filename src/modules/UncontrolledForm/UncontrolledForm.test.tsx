import UncontrolledForm from './UncontrolledForm';
import { render, screen, fireEvent } from '@testing-library/react';

jest.mock('../../components', () => ({
  ...jest.requireActual('../../components'),
  Result: ({ name, surname }: any) => <div>{name + surname}</div>,
}))

const setup = () => {
  const utils = render(<UncontrolledForm />)

  return utils;
}

describe('UncontrolledForm component', () => {
  it('render title', () => {
    setup();

    const nameInput = screen.getByText('Name:');
    const surnameInput = screen.getByText('Surname:');

    expect(nameInput).toBeInTheDocument();
    expect(surnameInput).toBeInTheDocument();
  });

  it('sumbit event pass state values to result', () => {
    setup();
    const nameInput = screen.getByLabelText<HTMLInputElement>('Name:');
    const surnameInput = screen.getByLabelText<HTMLInputElement>('Surname:');

    expect(nameInput).toBeInTheDocument();
    expect(surnameInput).toBeInTheDocument();

    const nameValue = 'nameValue';
    const surnameValue = 'surnameValue';

    fireEvent.change(nameInput, { target: { value: nameValue } });
    fireEvent.change(surnameInput, { target: { value: surnameValue } });

    const button = screen.getByDisplayValue('Save');
    fireEvent.click(button);

    const resultText = screen.getByText(nameValue + surnameValue);

    expect(resultText).toBeInTheDocument();
  });

  it('pass default values when no ref', () => {
    setup();
    const nameInput = screen.getByLabelText<HTMLInputElement>('Name:');
    const surnameInput = screen.getByLabelText<HTMLInputElement>('Surname:');

    expect(nameInput).toBeInTheDocument();
    expect(surnameInput).toBeInTheDocument();

    const nameValue = null;
    const surnameValue = null;

    fireEvent.change(nameInput, { target: { value: nameValue } });
    fireEvent.change(surnameInput, { target: { value: surnameValue } });

    const button = screen.getByDisplayValue('Save');
    fireEvent.click(button);

    const resultText = screen.getByText('defaultdefault');

    expect(resultText).toBeInTheDocument();
  });
});
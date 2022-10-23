import Result from './Result';
import { render, screen } from '@testing-library/react';
import { getRandomColor } from './helpers';

jest.mock('./helpers', () => ({
  getRandomColor: jest.fn(),
}))

const name = 'Johnny';
const surname = 'Silverhand';

const setup = () => {
  const utils = render(<Result name={name} surname={surname} />)

  return utils;
}

describe('Input component', () => {
  it('render name and surname', () => {
    setup();
    const nameText = screen.getByText(`Name - ${name}`);
    const surnameText = screen.getByText(`Surname - ${surname}`);

    expect(nameText).toBeInTheDocument();
    expect(surnameText).toBeInTheDocument();
  });

  it('should change border color', () => {
    (getRandomColor as jest.Mock).mockReturnValue('black');
    const { container, rerender } = setup();
    expect(container).toMatchSnapshot();

    (getRandomColor as jest.Mock).mockReturnValue('red');
    rerender(<Result name='new name' surname={surname} />);
    expect(container).toMatchSnapshot();

    (getRandomColor as jest.Mock).mockReturnValue('blue');
    rerender(<Result name='new name' surname='new surname' />);
    expect(container).toMatchSnapshot();
  });
});
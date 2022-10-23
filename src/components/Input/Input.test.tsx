import Input from './Input';
import { render, screen, fireEvent } from '@testing-library/react';

const title = 'title';
const onChange = jest.fn();

const setup = () => {
  const utils = render(<Input title={title} onChange={onChange} />)

  return utils;
}

describe('Input component', () => {
  it('render title', () => {
    // ! Arrange
    setup();

    // ! Act
    const titleText = screen.getByText(title)

    // ! Assert
    expect(titleText).toBeInTheDocument();
  });

  it('input event change value and call onChange', () => {
    setup();
    const input = screen.getByLabelText<HTMLInputElement>(title);
    expect(input).toBeInTheDocument();
    const value = 'value';

    fireEvent.change(input, { target: { value } });
    expect(input.value).toBe(value);
    expect(onChange).toHaveBeenCalledWith(value);
  })
});
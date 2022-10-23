import List from './List';
import { render, screen, fireEvent } from '@testing-library/react';
import { useFruitsApi } from './hooks';

jest.mock('./hooks', () => ({
  useFruitsApi: jest.fn(() => ({})),
}));

jest.mock('../../components', () => ({
  ...jest.requireActual('../../components'),
  Input: ({ title, onChange }: any) => (
    <label>
      {title}
      <input onChange={(e) => onChange(e.target.value)}></input>
    </label>
  ),
}))


const setup = () => {
  const utils = render(<List />)

  return utils;
}

describe('List component', () => {
  it('should render Loading if useFruitsApi return loading true', () => {
    (useFruitsApi as jest.Mock).mockReturnValue({
      fruits: ['apple'], loading: true
    })
    setup();

    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
    expect(() => screen.getByText('apple')).toThrow();
  });

  it('should render fruits when loading false', () => {
    const fruits = ['apple', 'orange'];
    (useFruitsApi as jest.Mock).mockReturnValue({
      fruits, loading: false
    })
    setup();

    fruits.forEach((fruit) => {
      const fruitText = screen.getByText(fruit);
      expect(fruitText).toBeInTheDocument();
    })

    expect(() => screen.getByText('Loading...')).toThrow();
  });

  it('input changes call useFruitsApi with proper value', () => {
    const fruits = ['apple', 'orange'];
    (useFruitsApi as jest.Mock).mockReturnValue({
      fruits, loading: false
    })
    setup();
    const value = 'someValue';

    const input = screen.getByLabelText('Search fruits');
    fireEvent.change(input, { target: { value } });

    expect(useFruitsApi).toHaveBeenCalledWith(value);
  });
});
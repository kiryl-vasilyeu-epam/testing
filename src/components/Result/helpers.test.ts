import { getRandomColor, CSS_COLOR_NAMES } from "./helpers";

describe('getRandomColor', () => {
  it('should return random from CSS_COLOR_NAMES', () => {
    const color = getRandomColor();

    expect(CSS_COLOR_NAMES.includes(color)).toBeTruthy()
  })
});
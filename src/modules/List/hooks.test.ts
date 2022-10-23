import { useFruitsApi } from './hooks';
import { apiCall } from '../../api';
import { renderHook, waitFor } from '@testing-library/react';

jest.mock('../../api', () => ({
  apiCall: jest.fn()
}))

describe('useFruitsApi', () => {
  it('should return correct render', async () => {
    const { result } = renderHook(() => useFruitsApi(''));
    expect(result.current.loading).toBeTruthy();
    await waitFor(() => expect(result.current.loading).toBeFalsy());
  });

  it('should return api value', async () => {
    const fruits = 'fruits';
    const name = 'name';

    (apiCall as jest.Mock).mockReturnValue(new Promise(res => res(fruits)));

    const { result } = renderHook(() => useFruitsApi(name));
    await waitFor(() => expect(result.current.fruits).toBe(fruits));
    expect(apiCall).toHaveBeenCalledWith(name);
  });
});
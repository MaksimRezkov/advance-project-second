import { Dispatch } from '@reduxjs/toolkit';
import { loginAsyncThunk } from './LoginAsyncThunk';
import axios from 'axios';
import { IStateSchema } from 'store/types/StateSchema';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('LoginAsyncThunk', () => {
  let dispatch: Dispatch;
  let getState: () => IStateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('failed login', async () => {
    // Указываем что будет возвращать метод post
    const action = loginAsyncThunk({ loginData: { password: '123', username: 'admin' } });

    const extraArgument = {
      apiClient: mockedAxios,
      navigate: jest.fn(),
    };

    const result = await action(dispatch, getState, extraArgument);
    extraArgument.apiClient.post.mockReturnValue(Promise.reject('').catch(e => console.log(e)));
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(extraArgument.apiClient.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});

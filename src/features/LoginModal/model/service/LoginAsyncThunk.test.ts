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
    const action = loginAsyncThunk({ loginData: { password: '123', username: 'admin' } });

    const extraArgument = {
      apiClient: mockedAxios,
      navigate: jest.fn(),
    };
    // Указываем что будет возвращать метод post
    extraArgument.apiClient.post.mockReturnValue(Promise.reject('failed login').catch(e => console.log(e)));

    /** Имитируем поведение диспатча, который так же вызывает эту функцию,
     * передаём инстанс dispatch;
     * передаём главный редюсер;
     * extra, такой же как указывается в configureStore
     */
    const result = await action(dispatch, getState, extraArgument);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(extraArgument.apiClient.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });

  test('success login', async () => {
    const action = loginAsyncThunk({ loginData: { password: '123', username: 'admin' } });
    const extraArgument = {
      apiClient: mockedAxios,
      navigate: jest.fn(),
    };
    extraArgument.apiClient.post.mockReturnValue(Promise.resolve('success login').then(res => console.log(res)));
    const result = await action(dispatch, getState, extraArgument);
    console.log(result);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(extraArgument.apiClient.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});

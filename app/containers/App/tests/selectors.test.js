import Immutable from 'seamless-immutable';

import {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocationState,
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = Immutable({});
    const mockedState = Immutable({
      global: globalState,
    });
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectCurrentUser', () => {
  const currentUserSelector = makeSelectCurrentUser();
  it('should select the current user', () => {
    const username = 'mxstbr';
    const mockedState = Immutable({
      global: {
        currentUser: username,
      },
    });
    expect(currentUserSelector(mockedState)).toEqual(username);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = Immutable({
      global: {
        loading,
      },
    });
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = Immutable({
      global: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectRepos', () => {
  const reposSelector = makeSelectRepos();
  it('should select the repos', () => {
    const repositories = Immutable([]);
    const mockedState = Immutable({
      global: {
        userData: {
          repositories,
        },
      },
    });
    expect(reposSelector(mockedState)).toEqual(repositories);
  });
});

describe('makeSelectLocationState', () => {
  const locationStateSelector = makeSelectLocationState();
  it('should select the route as a plain JS object', () => {
    const route = Immutable({
      locationBeforeTransitions: null,
    });
    const mockedState = Immutable({
      route,
    });
    expect(locationStateSelector(mockedState)).toEqual(route);
  });
});

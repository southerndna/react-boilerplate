import Immutable from 'seamless-immutable';

import {
  selectHome,
  makeSelectUsername,
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = Immutable({
      userData: {},
    });
    const mockedState = Immutable({
      home: homeState,
    });
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectUsername', () => {
  const usernameSelector = makeSelectUsername();
  it('should select the username', () => {
    const username = 'mxstbr';
    const mockedState = Immutable({
      home: {
        username,
      },
    });
    expect(usernameSelector(mockedState)).toEqual(username);
  });
});

import Immutable from 'seamless-immutable';

import languageProviderReducer from '../reducer';
import {
  CHANGE_LOCALE,
} from '../constants';

describe('languageProviderReducer', () => {
  it('returns the initial state', () => {
    expect(languageProviderReducer(undefined, {})).toEqual(Immutable({
      locale: 'en',
    }));
  });

  it('changes the locale', () => {
    expect(languageProviderReducer(undefined, { type: CHANGE_LOCALE, locale: 'de' }).toJS()).toEqual({
      locale: 'de',
    });
  });
});

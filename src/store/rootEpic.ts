import { combineEpics } from 'redux-observable';

import { gameSearchEpics } from '../libs/games/epics/search';
import { gameDetailsEpics } from '../libs/games/epics/details';
import { gameResultsEpics } from '../libs/games/epics/results';
import { apiInfoEpics } from '../libs/status/epics';

export const rootEpic = combineEpics(
  ...apiInfoEpics,
  ...gameResultsEpics,
  ...gameSearchEpics,
  ...gameDetailsEpics,
);

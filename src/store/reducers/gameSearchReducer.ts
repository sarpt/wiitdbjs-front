import {
  GameSearchActionsTypes,
  GameSearchActions,
} from '../actions/gameSearchActions';

import { RegionsMap, Regions } from '../../models/Regions';
import { Platforms, PlatformsMap } from '../../models/Platforms';

type SearchError = {
  hasError: boolean,
  message?: string
};

type State = {
  searchQuery: string,
  shouldFilterByText: boolean,
  searchedRegions: RegionsMap,
  searchedPlatforms: PlatformsMap,
  searchError: SearchError 
};

const initialState: State = {
  searchQuery: '',
  shouldFilterByText: true,
  searchedRegions: {
    [Regions.NTSCJ]: true,
    [Regions.NTSCU]: true,
    [Regions.PAL]: true,
    [Regions.OTHER]: true
  },
  searchedPlatforms: {
    [Platforms.NGC]: true,
    [Platforms.WII]: true,
    [Platforms.PS3]: true,
    [Platforms.NDS]: true,
    [Platforms.N3DS]: true,
    [Platforms.SWITCH]: true
  },
  searchError: {
    hasError: false
  }
};

export const gameSearchReducer = (state: State = initialState, action: GameSearchActions): State => {
  switch (action.type) {
    case GameSearchActionsTypes.ChangeSearchQuery:
      return {
        ...state,
        searchQuery: action.payload.searchQuery,
        shouldFilterByText: action.payload.shouldGetAllGames,
      };
    case GameSearchActionsTypes.ChangePlatforms:
      return {
        ...state,
        searchedPlatforms: action.payload.platforms
      };
    case GameSearchActionsTypes.ChangeRegions:
      return {
        ...state,
        searchedRegions: action.payload.regions
      };
    case GameSearchActionsTypes.SetGameSearchError:
      return {
        ...state,
        searchError: { hasError: true, message: action.payload.message }
      };
    default:
      return state;
  }
};

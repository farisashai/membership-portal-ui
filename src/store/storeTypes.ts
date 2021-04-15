import { ThunkAction } from 'redux-thunk';
import { ActionCreator, AnyAction } from 'redux';

export const FETCH_COLLECTIONS = 'FETCH_COLLECTIONS';
export const COLLECTION_ERROR = 'COLLECTION_ERROR';

export type ThunkActionCreator = ActionCreator<ThunkAction<void, {}, {}, AnyAction>>;

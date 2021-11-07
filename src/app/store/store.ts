import {createAction, props, createReducer, on, createSelector} from "@ngrx/store";

export const answersState: any = {};

// ACTIONS
export interface IAnswer {
  idx: number;
  title: string;
  answer: string;
}

export const addAnswer = createAction(
    '[Summary Component] AddAnswer',
    props<IAnswer>(),
);

// SELECTORS
export const selectAllValues = createSelector(
    (state: any) => state.answers,
    (state) => {
      return state;
    }
);

// REDUCERS
const _answersReducer = createReducer(
    answersState,
    on(addAnswer, (state: any, action: any) => ({
          ...state,
          [action.idx]: {
            idx: action.idx,
            title: action.title,
            answer: action.answer,
          },
        })
    ),
);

export function answersReducer(state: any, action: any) {
  return _answersReducer(state, action);
}

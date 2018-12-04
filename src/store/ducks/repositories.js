import { createReducer, createActions } from "reduxsauce";
import { markActionsOffline } from "redux-offline-queue";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  addRepositoryRequest: ["repositoryName"],
  addRepositorySuccess: ["repository"]
});

markActionsOffline(Creators, ["addRepositoryRequest"]);

export const RepositoriesTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false
});

/* Reducers */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_REPOSITORY_REQUEST]: state => state.merge({ loading: true }),
  [Types.ADD_REPOSITORY_SUCCESS]: (state, { repository }) =>
    state.update("data", data => [...data, repository])
});

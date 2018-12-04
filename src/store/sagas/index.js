import { all, spawn, takeEvery } from "redux-saga/effects";

import { RepositoriesTypes } from "../ducks/repositories";
import { addRepository } from "./repositories";

import { startWatchingNetworkConnectivity } from "./offline";

export default function* rootSaga() {
  yield all([
    spawn(startWatchingNetworkConnectivity),

    takeEvery(RepositoriesTypes.ADD_REPOSITORY_REQUEST, addRepository)
  ]);
}

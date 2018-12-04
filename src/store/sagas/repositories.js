import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import RepositoriesActions from "../ducks/repositories";

export function* addRepository({ repositoryName }) {
  const response = yield call(api.get, `/repos/${repositoryName}`);

  yield put(RepositoriesActions.addRepositorySuccess(response.data));
}

import { put, take } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { NetInfo } from "react-native";
import { OFFLINE, ONLINE } from "redux-offline-queue";

export function* startWatchingNetworkConnectivity() {
  const channel = eventChannel(emitter => {
    NetInfo.isConnected.addEventListener("connectionChange", emitter);
    return () =>
      NetInfo.isConnected.removeEventListener("connectionChange", emitter);
  });

  try {
    for (;;) {
      const isConnected = yield take(channel);

      if (isConnected) {
        yield put({ type: ONLINE });
      } else {
        yield put({ type: OFFLINE });
      }
    }
  } finally {
    channel.close();
  }
}

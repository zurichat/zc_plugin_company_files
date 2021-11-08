/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import { SubscribeToChannel } from "@zuri/utilities";

export function RTCSubscription(event, callback) {
  SubscribeToChannel(event, callback);
}

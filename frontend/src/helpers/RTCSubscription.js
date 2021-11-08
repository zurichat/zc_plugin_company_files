/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import { SubscribeToChannel } from "@zuri/control";

export function RTCSubscription(event, callback) {
  SubscribeToChannel(event, callback);
}

import Centrifuge from "centrifuge";
import axios from "axios";

// const centrifuge = new Centrifuge("ws://localhost:8000/connection/websocket");
const centrifuge = new Centrifuge(
  "wss://realtime.zuri.chat/connection/websocket"
);

class RealTime {
  static subscribe = (channel, apiRoute, callback) => {
    centrifuge.on("connect", async (data) => {
      await axios.get(`https://companyfiles.zuri.chat/api/v1/${apiRoute}`);
      console.log(data);
    });

    centrifuge.on("disconnect", (data) => {
      console.log(data);
    });

    centrifuge.connect();
    centrifuge.subscribe(channel, callback);
  };
}

export default RealTime;

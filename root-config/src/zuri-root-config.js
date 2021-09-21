import { registerApplication, start } from "single-spa";

registerApplication({
  name: '@zuri/zuri-plugin-company-files',
  app: () => System.import("@zuri/zuri-plugin-company-files"),
  activeWhen: ["/"]
})

start(
  { urlRerouteOnly: true }
);

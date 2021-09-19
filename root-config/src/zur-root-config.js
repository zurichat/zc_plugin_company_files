import { registerApplication, start } from "single-spa";

registerApplication({
  name: '@zuri/zuri-plugin-companyFiles',
  app: () => System.import("@zuri/zuri-plugin-companyFiles"),
  activeWhen: ["/companyFiles"]
})

start(
  { urlRerouteOnly: true }
);

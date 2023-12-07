const { SpecReporter } = require("jasmine-spec-reporter");

exports.config = {
  allScriptsTimeout: 11000,
  framework: "jasmine",
  baseUrl: "http://localhost:4200/",
  specs: ["./src/e2e/signin.e2e-spec.ts"],
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless", "--disable-gpu"],
    },
  },
  directConnect: true,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {},
  },
  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.json"),
    });
    jasmine
      .getEnv()
      .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },
};

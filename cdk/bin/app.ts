import { App } from "aws-cdk-lib";
import { LunchBuddiesWebStack } from "../lib/stack";
import { EnvConfig } from "../lib/config";
import devConfig from "../config/dev.json";
import productionConfig from "../config/production.json";

const app = new App();

function deploy(id: string, cfg: EnvConfig) {
  new LunchBuddiesWebStack(app, id, cfg, {
    env: {
      account: cfg.account,
      region: cfg.region,
    },
  });
}

// Named lunch-buddies-web-* so they don't collide with the backend's
// lunch-buddies-* stacks in the same account.
deploy("lunch-buddies-web-dev", devConfig as EnvConfig);
deploy("lunch-buddies-web-production", productionConfig as EnvConfig);

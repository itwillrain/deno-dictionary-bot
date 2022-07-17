import { App, config } from "./deps.ts";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";

console.log(
  Deno.env.get("SLACK_SIGNING_SECRET"),
  Deno.env.get("SLACK_BOT_TOKEN")
);

const app = new App({
  signingSecret: Deno.env.get("SLACK_SIGNING_SECRET"),
  token: Deno.env.get("SLACK_BOT_TOKEN"),
  ignoreSelf: true,
});

await app.start({ port: 3000 });
console.log("🦕 ⚡️Bolt app is running!");

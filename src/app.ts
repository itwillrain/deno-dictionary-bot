import { App } from "./deps.ts";
import type { GenericMessageEvent } from "./deps.ts";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";

const app = new App({
  signingSecret: Deno.env.get("SLACK_SIGNING_SECRET"),
  token: Deno.env.get("SLACK_BOT_TOKEN"),
  socketMode: true,
  appToken: Deno.env.get("SLACK_APP_TOKEN"),
});

app.message("hello", async ({ event, say }) => {
  const forceTypedEvent = event as GenericMessageEvent;
  const user = forceTypedEvent.user;
  const text = forceTypedEvent.text;
  await say(`<@${user}> Pong.🏓 / ${text}`);
});

await app.start({ port: 3000 });
console.log("🦕 ⚡️Bolt app is running!");

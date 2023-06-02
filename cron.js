require("dotenv").config({ path: __dirname + "/.env" });
const { twitterClient, twitterBearer } = require("./twitterClient.js");
const CronJob = require("cron").CronJob;
const { download } = require("./utilities.js");
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const tweet1 = async () => {
  try {
    await twitterClient.v2.tweet("Today is a crazy1 day!");
  } catch (e) {
    console.log(e);
  }
};

const tweet2 = async () => {
  try {
    await twitterClient.v2.tweet("Today is a crazy2 day!");
  } catch (e) {
    console.log(e);
  }
};

const cronTweet = new CronJob("*/10 * * * *", async () => {
  tweet1();
  await setTimeout(20000);
  tweet2();
});

cronTweet.start();

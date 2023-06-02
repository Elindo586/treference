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

monthly () {
    const tweet = async () => {
  try {
    await twitterClient.v2.tweet(
      "Happy Monday to Everybody! How are you doing today? "
    );
  } catch (e) {
    console.log(e);
  }
};

const tweet2 = async () => {
  try {
    await twitterClient.v2.tweet(
      "Feliz Lunes para todos! ... como van el dia de hoy? "
    );
  } catch (e) {
    console.log(e);
  }
};

setTimeout(() => {
  tweet();
}, "1000");

setTimeout(() => {
  tweet2();
}, "3600000");

};



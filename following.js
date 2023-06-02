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

// const followingsOfJack = await client.v2.following("12");

// const followingsOfJackAsPaginator = await client.v2.following("12", {
//   asPaginator: true,
// });
// console.log(followingsOfJackAsPaginator instanceof UserFollowingV2Paginator); // true

const tweet1 = async () => {
  try {
    await twitterClient.v2.following("2244994945");

    const followingsOfJackAsPaginator = await twitterClient.v2.following(
      "2244994945",
      {
        asPaginator: true,
      }
    );
    console.dir(followingsOfJackAsPaginator, { depth: null }); // true
  } catch (e) {
    console.log(e);
  }
};

tweet1();

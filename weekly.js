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
    await twitterClient.v2.tweet(
      "Hydraulics is the way to go when you are lifting heavy weights."
    );
  } catch (e) {
    console.log(e);
  }
};

const tweet2 = async () => {
  try {
    await twitterClient.v2.tweet(
      "La hidraulica es la mejor forma de automatizacion cuando se necesita mover algo pesado.  "
    );
  } catch (e) {
    console.log(e);
  }
};

const tweet3 = async () => {
  try {
    await twitterClient.v2.tweet(
      " Entre mas pesado, mas se necesita el uso hidraulica en maquinaria."
    );
  } catch (e) {
    console.log(e);
  }
};

const tweet4 = async () => {
  try {
    await twitterClient.v2.tweet(
      " Hidraulica, Neumatica, Electro-meacanica.... son las formas de automatizacion para movimiento de maquinaria. "
    );
  } catch (e) {
    console.log(e);
  }
};

const tweet5 = async () => {
  try {
    await twitterClient.v2.tweet(
      "Digame usted.... que tan grande pueden las maquinarias para la mineria? "
    );
  } catch (e) {
    console.log(e);
  }
};

const tweet6 = async () => {
  try {
    await twitterClient.v2.tweet(
      " @ElonMusk dice que hay que poner muchos twitts... si?  "
    );
  } catch (e) {
    console.log(e);
  }
};

const tweet7 = async () => {
  try {
    await twitterClient.v2.tweet(
      " Cuanto falta para el proximo fin de semana? "
    );
  } catch (e) {
    console.log(e);
  }
};

const cronTweet1 = new CronJob("0 0 8 * * MON", async () => {
  tweet1();
});

cronTweet1.start();

const cronTweet2 = new CronJob("0 0 8 * * TUE", async () => {
  tweet2();
});

cronTweet2.start();

const cronTweet3 = new CronJob("0 27 11 * * WED", async () => {
  tweet3();
});

cronTweet3.start();

const cronTweet4 = new CronJob("0 0 8 * * THU", async () => {
  tweet4();
});

cronTweet4.start();

const cronTweet5 = new CronJob("0 0 8 * * FRI", async () => {
  tweet5();
});

cronTweet5.start();

const cronTweet6 = new CronJob("0 0 8 * * SAT", async () => {
  tweet6();
});

cronTweet6.start();

const cronTweet7 = new CronJob("0 0 8 * * SUN", async () => {
  tweet7();
});

cronTweet7.start();

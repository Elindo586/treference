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
      "Happy Friday to Everybody! How are you doing today? "
    );
  } catch (e) {
    console.log(e);
  }
};

const tweet2 = async () => {
  try {
    await twitterClient.v2.tweet(
      "Feliz Viernes para todos! ... como van el dia de hoy? "
    );
  } catch (e) {
    console.log(e);
  }
};

const tweet3 = async () => {
  try {
    await twitterClient.v2.tweet(
      "Los robots con inteligencia artificial eventualmente va ha reemplazar a todos los novios. "
    );
  } catch (e) {
    console.log(e);
  }
};

const tweet4 = async () => {
  try {
    await twitterClient.v2.tweet(
      "AI robots will eventually replace all boyfriends. "
    );
  } catch (e) {
    console.log(e);
  }
};

const tweet5 = async () => {
  try {
    await twitterClient.v2.tweet(
      "La hidraulica industrial es solamente para maquinaria pesada... el trabajo liviano se lo dejamos a los servo motores. "
    );
  } catch (e) {
    console.log(e);
  }
};

const tweet6 = async () => {
  try {
    await twitterClient.v2.tweet(
      "No hay mal que por bien no venga... tienen ejemplos de eso? "
    );
  } catch (e) {
    console.log(e);
  }
};

setTimeout(() => {
  tweet1();
}, "1000");

setTimeout(() => {
  tweet2();
}, "14400000");

setTimeout(() => {
  tweet3();
}, "28800000");

setTimeout(() => {
  tweet3();
}, "43200000");

setTimeout(() => {
  tweet5();
}, "57600000");

setTimeout(() => {
  tweet6();
}, "72000000");

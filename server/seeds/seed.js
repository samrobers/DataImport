//TODO connect to DB and require correct models
const db = require("../config/connection");
const { WellsSpud_08 } = require("../models");

const wellsSpudData = require("./wellsSpud_08.json");
db.once("open", async () => {
  await WellsSpud_08.deleteMany({});
  const wellsSpud = await WellsSpud_08.insertMany(wellsSpudData);
  console.log("Wells Spud seeded!");
  process.exit(0);
});

//TODO Oracle connection requirement
const { Schema, model } = require("mongoose");

const yearlyWellSpudSchema = new Schema({
  fiscal_year: {
    type: String,
  },
  state: {
    type: String,
  },
  wells_spud: {
    type: Number,
  },
});

const YearlyWellSpud = model("YearlyWellSpud", yearlyWellSpudSchema);

module.exports = YearlyWellSpud;

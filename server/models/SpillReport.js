//TODO Oracle connection requirement
const { Schema, model } = require("mongoose");

const spillReportSchema = new Schema({
  doc_number: {
    type: String,
  },
  submit_data: {
    type: String,
  },
  facility_id: {
    type: String,
  },
  api_number: {
    type: String,
  },
  operator: {
    type: String,
  },
  operator_number: {
    type: String,
  },
  complaintant: {
    type: String,
  },
  facility_type: {
    type: String,
  },
  groundwater_impact: {
    type: String,
  },
  surfacewater_impact: {
    type: String,
  },
  berm_contained: {
    type: String,
  },
  spill_area: {
    type: String,
  },
  closed: {
    type: String,
  },
  incident_date: {
    type: String,
  },
  resolution_date: {
    type: String,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  county: {
    type: String,
  },
  url: {
    type: String,
  },
  municipality: {
    type: String,
  },
});

const SpillReport = model("SpillReport", spillReportSchema);

module.exports = SpillReport;

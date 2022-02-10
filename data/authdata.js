const fetch = require("node-fetch");
const queryString = require("query-string");
const moment = require("moment");

// set the Timelines GET endpoint as the target URL
const getTimelineURL = "https://api.tomorrow.io/v4/timelines";

// get your key from app.tomorrow.io/development/keys
const apikey = "T50Ql1p01T1G2tcFUh8kSp90uhiviml3";

// pick the location, as a latlong pair
let location = [35.858940, 10.597147];

// list the fields
const fields =  [
    "windSpeed",
    "windGust",
    "windDirection",
    "temperature",
    "temperatureApparent",
    "weatherCode",
  ];

// choose the unit system, either metric or imperial
const units = "imperial";

// set the timesteps, like "current", "1h" and "1d"
const timesteps = ["1d"];

// configure the time frame up to 6 hours back and 15 days out
const now = moment.utc();
const startTime = moment.utc(now).add(0, "minutes").toISOString();
const endTime = moment.utc(now).add(15, "days").toISOString();

// specify the timezone, using standard IANA timezone format
const timezone = "America/New_York";

// request the timelines with all the query string parameters as options
const getTimelineParameters = queryString.stringify(
  {
    apikey,
    location,
    fields,
    units,
    timesteps,
    startTime,
    endTime,
    timezone,
  },
  { arrayFormat: "comma" }
);

const myfetch = (req,res) => {
  fetch(getTimelineURL + "?" + getTimelineParameters, { method: "GET" })
    .then((result) => result.json())
    .then((json) => res.send(JSON.stringify(json)))
        //res.render('index', {JSON.stringify(json)}))
    .catch((error) => console.error("error: " + error));
};



module.exports = myfetch;

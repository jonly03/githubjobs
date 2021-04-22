// packages
const express = require("express");

// internal code
const { getJobs } = require("./Services");

const server = express();

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server listen on port: ${PORT}`);
});

// GET /jobs
server.get("/jobs", (req, res) => {
  const { tech } = req.query;

  // validation
  if (tech === undefined)
    return res.status(400).send({ error: "tech query parameter is required" });

  getJobs(tech).then((jobs) => res.send(jobs));
});

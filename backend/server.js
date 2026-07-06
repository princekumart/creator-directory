const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let creators = require("./seed.json");

// GET Creators
app.get("/creators", (req, res) => {
  const {
    page = 1,
    limit = 10,
    sortBy,
    order = "asc",
    niche,
    minFollowers,
    maxFollowers,
  } = req.query;

  let results = [...creators];

  // Filter
  if (niche) {
    results = results.filter((c) => c.niche === niche);
  }

  if (minFollowers) {
    results = results.filter(
      (c) => c.followerCount >= Number(minFollowers)
    );
  }

  if (maxFollowers) {
    results = results.filter(
      (c) => c.followerCount <= Number(maxFollowers)
    );
  }

  // Sort
  if (sortBy) {
    results.sort((a, b) => {
      if (order === "desc") {
        return b[sortBy] - a[sortBy];
      }
      return a[sortBy] - b[sortBy];
    });
  }

  const total = results.length;
  const start = (page - 1) * limit;

  res.json({
    data: results.slice(start, start + Number(limit)),
    total,
    page: Number(page),
    limit: Number(limit),
  });
});

// Create
app.post("/creators", (req, res) => {
  const creator = {
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    ...req.body,
  };

  creators.push(creator);

  res.status(201).json(creator);
});

// Update
app.patch("/creators/:id", (req, res) => {
  const index = creators.findIndex((c) => c.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({
      error: "Creator not found",
    });
  }

  creators[index] = {
    ...creators[index],
    ...req.body,
  };

  res.json(creators[index]);
});

// Delete
app.delete("/creators/:id", (req, res) => {
  creators = creators.filter((c) => c.id !== req.params.id);

  res.status(204).send();
});

app.listen(4001, () => {
  console.log("🚀 Mock API running at http://localhost:4001");
});
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
      if (typeof a[sortBy] === "number") {
        return order === "desc"
          ? b[sortBy] - a[sortBy]
          : a[sortBy] - b[sortBy];
      } else {
        return order === "desc"
          ? String(b[sortBy]).localeCompare(String(a[sortBy]))
          : String(a[sortBy]).localeCompare(String(b[sortBy]));
      }
    });
  }

  const total = results.length;
  const start = (Number(page) - 1) * Number(limit);

  res.json({
    data: results.slice(start, start + Number(limit)),
    total,
    page: Number(page),
    limit: Number(limit),
  });
});

// Create Creator
app.post("/creators", (req, res) => {
  const creator = {
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    ...req.body,
  };

  creators.push(creator);

  res.status(201).json(creator);
});

// Update Creator
app.patch("/creators/:id", (req, res) => {
  const index = creators.findIndex(
    (c) => c.id === req.params.id
  );

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

// Delete Creator
app.delete("/creators/:id", (req, res) => {
  creators = creators.filter(
    (c) => c.id !== req.params.id
  );

  res.status(204).send();
});

// Home Route
app.get("/", (req, res) => {
  res.send("Creator Directory Backend is Running 🚀");
});

// Render Port
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
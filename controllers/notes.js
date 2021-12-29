const express = require("express");
const route = express.Router();
const notes = require("../models/notes");

// To get all notes from the database
route.get("/", async (req, res) => {
  try {
    const notes1 = await notes.find({});
    res.json(notes1);
  } catch (err) {
    res.send("Error : " + err);
  }
});

// To get particular note from the database
route.get("/:id", async (req, res) => {
  try {
    const notes1 = await notes.findById(req.params.id);
    res.json(notes1);
  } catch (err) {
    res.send("Error : " + err);
  }
});

// To add a new note to the database
route.post("/add", async (req, res) => {
  const notes1 = new notes({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const note11 = await notes1.save();
    res.json(note11);
  } catch (err) {
    res.send("Error : " + err);
  }
});

// To edit a note in the database
route.post("/edit", async (req, res) => {
  try {
    const { title, description } = req.body;
    const notes1 = await notes.findOneAndUpdate(
      { _id: req.body.id },
      {
        title,
        description,
      }
    );
    res.json(notes1);
  } catch (err) {
    res.send("Error : " + err);
  }
});

// To delete a note from the database
route.post("/delete", async (req, res) => {
  try {
    const notes1 = await notes.findById(req.body.id);
    notes1.remove();
    res.json(notes1);
  } catch (err) {
    res.send("Error : " + err);
  }
});

module.exports = route;

const express = require("express");
const route = express.Router();
const notes = require("../models/notes");

// To get all notes from the database
route.get("/", async (req, res) => {
  try {
    const notes1 = await notes.find({});
    res.json(notes1);
  } catch (err) {
    res.json({msg: "Error getting the notes"})
  }
});

// To get particular note from the database
route.get("/:id", async (req, res) => {
  try {
    const notes1 = await notes.findById(req.params.id);
    res.json(notes1);
  } catch (err) {
    res.json({msg: "Error getting the note"})
  }
});

// To add a new note to the database
route.post("/add", async (req, res) => {
    let date = new Date();
  const notes1 = new notes({
    title: req.body.title,
    description: req.body.description,
    date: date
  });

  try {
    const note11 = await notes1.save();
    res.json(note11);
  } catch (err) {
    res.json({ msg:err.message });
  }
});

// To edit a note in the database
route.post("/edit", async (req, res) => {
  try {
    let date = new Date();
    const { title, description } = req.body.notes;
    const notes1 = await notes.findOneAndUpdate(
      { _id: req.body.notes._id },
      {
        title,
        description,
        date
      }
    );
    res.json({ msg: "Note Edited successfully" });
  } catch (err) {
    res.json({ msg: "Error Updating the note" });
  }
});

// To delete a note from the database
route.post("/delete", async (req, res) => {
  try {
    const notes1 = await notes.findById(req.body.id);
    notes1.remove();
    res.json({ msg: "Note deleted successfully" });
  } catch (err) {
    res.json({ msg: "Error Deleting the note" });
  }
});

module.exports = route;

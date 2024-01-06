const express = require("express");
const db = require("../models/database"); // Import the db object
const cors = require("cors");
const router = express.Router();

// Fetch all users
router.get("/matching-artists", cors(), (req, res) => {
  const { genre, bpmRange, eventType } = req.query;

  // TODO: Continue later by applying the correct filters, see #BOO-36
  db.all(
    "SELECT id, name, genre, bpm_low, bpm_high, avatar_url, description, soundcloud_profile_link, event_type, played_at FROM users",
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: "Database error" });
      }
      res.json(rows);
    }
  );
});

module.exports = router;

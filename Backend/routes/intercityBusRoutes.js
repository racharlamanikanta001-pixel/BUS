import express from "express";
import IntercityBus from "../models/IntercityBus.js";

const router = express.Router();

// Get intercity buses
router.get("/", async (req, res) => {
  try {
    const { from_state, to_state } = req.query;
    let query = {};
    if (from_state) query.from_state = from_state;
    if (to_state) query.to_state = to_state;
    const buses = await IntercityBus.find(query);
    res.json(buses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new intercity bus
router.post("/", async (req, res) => {
  try {
    const newBus = new IntercityBus(req.body);
    await newBus.save();
    res.status(201).json(newBus);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;

import express from "express";
import CityBus from "../models/CityBus.js";

const router = express.Router();

// Get all city buses
router.get("/", async (req, res) => {
  try {
    const { state, city } = req.query;
    let query = {};
    if (state) query.state = state;
    if (city) query.city = city;
    const buses = await CityBus.find(query);
    res.json(buses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new city bus
router.post("/", async (req, res) => {
  try {
    const newBus = new CityBus(req.body);
    await newBus.save();
    res.status(201).json(newBus);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;

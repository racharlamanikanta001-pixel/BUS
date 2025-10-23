import express from "express";
import CollegeBus from "../models/CollegeBus.js";

const router = express.Router();

// Get college buses
router.get("/", async (req, res) => {
  try {
    const { college_name } = req.query;
    let query = {};
    if (college_name) query.college_name = college_name;
    const buses = await CollegeBus.find(query);
    res.json(buses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new college bus
router.post("/", async (req, res) => {
  try {
    const newBus = new CollegeBus(req.body);
    await newBus.save();
    res.status(201).json(newBus);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;

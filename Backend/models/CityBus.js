import mongoose from "mongoose";

const cityBusSchema = new mongoose.Schema({
  state: { type: String, required: true },
  city: { type: String, required: true },
  bus_number: { type: String, required: true },
  route: [String],
  timings: {
    start: String,
    end: String,
    frequency_minutes: Number
  },
  bus_type: { type: String, default: "Ordinary" }
});

export default mongoose.model("CityBus", cityBusSchema);

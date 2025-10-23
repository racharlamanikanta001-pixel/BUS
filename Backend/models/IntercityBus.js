import mongoose from "mongoose";

const intercityBusSchema = new mongoose.Schema({
  from_state: { type: String, required: true },
  from_city: { type: String, required: true },
  to_state: { type: String, required: true },
  to_city: { type: String, required: true },
  departure_time: String,
  arrival_time: String,
  bus_type: String,
  operator: String
});

export default mongoose.model("IntercityBus", intercityBusSchema);

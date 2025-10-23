import mongoose from "mongoose";

const collegeBusSchema = new mongoose.Schema({
  college_name: { type: String, required: true },
  route: [String],
  timings: {
    morning_departure: String,
    evening_return: String
  },
  bus_type: { type: String, default: "College" },
  driver_contact: String
});

export default mongoose.model("CollegeBus", collegeBusSchema);

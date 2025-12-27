import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  fee: Number,
  availableTime: String,
  image: String
});

export default mongoose.model("Doctor", doctorSchema);

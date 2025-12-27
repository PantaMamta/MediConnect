import Doctor from "../models/Doctor.js";

export const getDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
};

export const addDoctor = async (req, res) => {
  const doctor = new Doctor(req.body);
  await doctor.save();
  res.json({ message: "Doctor added successfully" });
};

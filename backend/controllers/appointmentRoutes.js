import Appointment from "../models/Appointment.js";

export const bookAppointment = async (req, res) => {
  const appointment = new Appointment(req.body);
  await appointment.save();
  res.json({ message: "Appointment booked" });
};

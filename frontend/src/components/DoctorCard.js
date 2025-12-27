export default function DoctorCard({ doctor }) {
  return (
    <div className="card">
      <img
        src={doctor.image || "https://images.unsplash.com/photo-1607746882042-944635dfe10e"}
        alt="Doctor"
      />
      <h3>{doctor.name}</h3>
      <span className="badge">{doctor.specialization}</span>
      <p><b>Fee:</b> Rs. {doctor.fee}</p>
      <p><b>Time:</b> {doctor.availableTime}</p>
      <button className="btn">Book Appointment</button>
    </div>
  );
}

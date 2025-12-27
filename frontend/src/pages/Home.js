import { useEffect, useState } from "react";
import { getDoctors } from "../services/api";
import DoctorCard from "../components/DoctorCard";

export default function Home() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors().then(data => setDoctors(data));
  }, []);

  return (
    <div className="container">
      <h1>Doctor List</h1>
      <div className="grid">
        {doctors.map(doc => (
          <DoctorCard key={doc._id} doctor={doc} />
        ))}
      </div>
    </div>
  );
}

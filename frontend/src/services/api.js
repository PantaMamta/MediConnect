const API_URL = "http://localhost:5000/api";

export const getDoctors = async () => {
  const res = await fetch(`${API_URL}/doctors`);
  return res.json();
};

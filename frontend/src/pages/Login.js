import { useState } from "react";
import { loginUser } from "../services/api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async () => {
    const data = await loginUser(form);
    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login Successful");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="auth">
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password:e.target.value})}/>
      <button onClick={submit}>Login</button>
    </div>
  );
}

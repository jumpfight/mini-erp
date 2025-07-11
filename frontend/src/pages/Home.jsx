import { useEffect, useState } from 'react'
import { login, fetchHello } from '../api/backend'

function Home() {
  const [message, setMessage] = useState("Memuat...");
  const [token, setToken] = useState(null);

  useEffect(() => {
    login("admin", "123")
      .then((data) => {
        if (data.token) {
          setToken(data.token);
        } else {
          setMessage(data.text || "Login gagal");
        }
      })
      .catch(() => setMessage("Gagal login ke backend"));
  }, []);

  useEffect(() => {
    if (!token) return;

    fetchHello(token)
      .then((data) => setMessage(data.text))
      .catch(() => setMessage("Gagal ambil data dari Go pakai JWT"));
  }, [token]);

  return (
    <div className="App">
      <h1>Frontend React</h1>
      <p>Pesan dari Backend: <strong>{message}</strong></p>
    </div>
  )
}

export default Home;

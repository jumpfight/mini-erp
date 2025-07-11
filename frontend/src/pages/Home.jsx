import { useEffect, useState } from 'react'
import { login, fetchHello,kirimNama } from '../api/backend'

function Home() {
  const [message, setMessage] = useState("Memuat...");
  const [token, setToken] = useState(null);
  
  const [nama, setNama] = useState('')
  const [balasan, setBalasan] = useState(null)

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


  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await kirimNama(token,nama)
    setBalasan(res.text || "Gagal respon dari server")
  }

  return (

    <div className="App">
      <h1>Frontend React</h1>
        <div style={{ padding: "1rem" }}>
        <h2>Halo Form</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Masukkan nama"
            value={nama}
            onChange={e => setNama(e.target.value)}
            />
            <button type="submit">Kirim</button>
        </form>

        {balasan && <p>Respon: {balasan}</p>}
        </div>
        
      <p>Pesan dari Backend: <strong>{message}</strong></p>
    </div>
  )
}

export default Home;

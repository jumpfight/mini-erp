import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("Memuat...");
  const [token, setToken] = useState(null)

  useEffect(() => {
    //Karena React jalan di http://localhost:5173 -> 3000, 
    // dan backend Go di http://localhost:8080, 
    // jadi harus pakai full URL.
    // fetch('http://backend:8080/api/hello')
    fetch('http://localhost:8080/api/login',{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "admin", password: "123" }),
    })
      .then(res => res.json())
      .then(data => {
        console.log("Login Response:", data); // Cek token
        if(data.token){
          setToken(data.token)
        }else{
          setMessage(data.text)
        }
      })
      .catch(err => setMessage("Gagal ambil data dari Go ya"));
  }, []);

  useEffect(() => {
    if (!token) return

    // 2. Panggil API dengan Authorization Header
    fetch("http://localhost:8080/api/hello", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setMessage(data.text))
      .catch(err => setMessage("Gagal ambil data dari Go pakai JWT"))
  }, [token])

  return (
    <div className="App">
      <h1>Frontend React</h1>
      <p>Pesan dari Backend: <strong>{message}</strong></p>
    </div>
  )
}

export default App

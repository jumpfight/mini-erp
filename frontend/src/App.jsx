import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("Memuat...");

  useEffect(() => {
    //Karena React jalan di http://localhost:5173 -> 3000, 
    // dan backend Go di http://localhost:8080, 
    // jadi harus pakai full URL.
    // fetch('http://localhost:8080/api/hello')
    fetch('http://backend:8080/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.text))
      .catch(err => setMessage("Gagal ambil data"));
  }, []);

  return (
    <div className="App">
      <h1>Frontend React</h1>
      <p>Pesan dari Backend: <strong>{message}</strong></p>
    </div>
  )
}

export default App

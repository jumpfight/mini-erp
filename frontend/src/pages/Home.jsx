import { useEffect, useState } from 'react'
import { login, fetchHello,kirimNama } from '../api/backend'
import {
  CContainer,
  CForm,
  CFormInput,
  CButton,
  CCard,
  CCardBody,
  CCardTitle,
  CAlert,
} from '@coreui/react'


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

  useEffect(() => {
    document.title = import.meta.env.VITE_APP_NAME || 'Default App'
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await kirimNama(token,nama)
    setBalasan(res.text || "Gagal respon dari server")
  }

  return (
      <CContainer className="px-0 py-0">
        <CCard>
          <CCardBody>
            <CCardTitle>Halo Form</CCardTitle>

            <CForm onSubmit={handleSubmit} className="mb-3">
              <CFormInput
                type="text"
                label="Masukkan Nama"
                placeholder="Contoh: Budi"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
              <CButton type="submit" color="primary" className="mt-2">Kirim</CButton>
            </CForm>

            {balasan && <CAlert color="info">Respon: {balasan}</CAlert>}
            <p>Pesan dari Backend: <strong>{message}</strong></p>
          </CCardBody>
        </CCard>
      </CContainer>
  )
}

export default Home;

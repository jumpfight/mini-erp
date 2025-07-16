export async function login(username, password) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
}

export async function fetchHello(token) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/hello`, {
     headers: {
      Authorization: `Bearer ${token}`,
     }
  });
  return res.json();
}

export async function kirimNama(token,nama) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/hello`, {
    method: "POST",
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ nama })
  })
  return res.json()
}

export async function ambilSummary() {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/summary`, {
    method: "GET",
    headers: {
        //Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    }
  })
  return res.json()
}

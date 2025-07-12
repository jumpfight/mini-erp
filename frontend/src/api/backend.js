export async function login(username, password) {
  const res = await fetch('http://localhost:8080/api/login', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
}

export async function fetchHello(token) {
  const res = await fetch("http://localhost:8080/api/hello", {
     headers: {
      Authorization: `Bearer ${token}`,
     }
  });
  return res.json();
}

export async function kirimNama(token,nama) {
  const res = await fetch("http://localhost:8080/api/hello", {
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
  const res = await fetch("http://localhost:8080/api/summary", {
    method: "GET",
    headers: {
        //Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    }
  })
  return res.json()
}

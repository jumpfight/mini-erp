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
      Authorization: `Bearer ${token}`
    }
  });
  return res.json();
}

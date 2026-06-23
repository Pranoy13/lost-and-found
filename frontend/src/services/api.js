const API_URL = 'http://localhost:5000/api'

async function handleResponse(res) {
  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.error || 'Something went wrong')
  }
  return data
}

export async function signup(name, email, password) {
  const res = await fetch(`${API_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  })
  return handleResponse(res)
}

export async function login(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  return handleResponse(res)
}

export async function getItems() {
  const res = await fetch(`${API_URL}/items`)
  return handleResponse(res)
}

export async function getItemById(id) {
  const res = await fetch(`${API_URL}/items/${id}`)
  return handleResponse(res)
}

export async function createItem(itemData) {
  const res = await fetch(`${API_URL}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(itemData),
  })
  return handleResponse(res)
}
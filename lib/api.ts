const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

async function handleResponse(res: Response) {
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.detail || "API request failed");
  }
  return data;
}

export async function getCats() {
  const res = await fetch(`${API_URL}/cats/`);
  return handleResponse(res);
}

export async function createCat(cat: any) {
  const payload = {
    name: cat.name,
    years_experience: cat.years_experience,
    breed: cat.breed,
    salary: cat.salary,
  };

  const res = await fetch(`${API_URL}/cats/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return handleResponse(res);
}

export async function updateCat(catId: number, data: any) {
  const payload = {
    salary: data.salary,
  };

  const res = await fetch(`${API_URL}/cats/${catId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return handleResponse(res);
}

export async function deleteCat(catId: number) {
  const res = await fetch(`${API_URL}/cats/${catId}`, { method: "DELETE" });
  return handleResponse(res);
}

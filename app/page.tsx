"use client";

import { useEffect, useState } from "react";
import { getCats, createCat, updateCat, deleteCat } from "../lib/api";
import CatForm from "../components/CatForm";
import CatCard from "../components/CatCard";

export default function HomePage() {
  const [cats, setCats] = useState<any[]>([]);
  const [editingCat, setEditingCat] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchCats = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getCats();
      setCats(data);
      if (data.length === 0) {
        setError("");
      }
    } catch (err: any) {
      setError(err.message);
      setCats([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  const handleCreate = async (cat: any) => {
    await createCat(cat);
    fetchCats();
  };

  const handleUpdate = async (cat: any) => {
    if (!editingCat) return;
    await updateCat(editingCat.id, cat);
    setEditingCat(null);
    fetchCats();
  };

  const handleDelete = async (id: number) => {
    await deleteCat(id);
    if (editingCat?.id === id) setEditingCat(null);
    fetchCats();
  };

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Spy Cats Dashboard</h1>

      {error && (
        <div className="error mb-4">
          <strong>Error:</strong> {error}
        </div>
      )}

      <CatForm
        onSubmit={editingCat ? handleUpdate : handleCreate}
        initialData={editingCat}
      />

      <div className="mt-4 flex flex-col gap-2">
        {cats.length === 0 && !error && (
          <p>No cats found. Add your first spy cat!</p>
        )}
        {cats.map((cat: any) => (
          <CatCard
            key={cat.id}
            cat={cat}
            onEdit={setEditingCat}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
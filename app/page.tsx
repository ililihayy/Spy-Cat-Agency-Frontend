"use client";

import { useEffect, useState } from "react";
import { getCats, createCat, updateCat, deleteCat } from "../lib/api";
import CatForm from "../components/CatForm";
import CatCard from "../components/CatCard";

export default function HomePage() {
  const [cats, setCats] = useState<any[]>([]);
  const [editingCat, setEditingCat] = useState<any>(null);

  const fetchCats = async () => {
    const data = await getCats();
    setCats(data);
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

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Spy Cats Dashboard</h1>

      <CatForm
        onSubmit={editingCat ? handleUpdate : handleCreate}
        initialData={editingCat}
      />

      <div className="mt-4 flex flex-col gap-2">
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

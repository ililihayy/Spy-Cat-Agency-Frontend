"use client";

export default function CatCard({ cat, onEdit, onDelete }: any) {
  return (
    <div className="cat-card">
      <div className="cat-info">
        <p>
          <strong>{cat.name}</strong> ({cat.years_experience} yrs) - {cat.breed}
        </p>
        <p>Salary: ${cat.salary}</p>
      </div>
      <div className="cat-actions">
        <button
          onClick={() => onEdit(cat)}
          className="btn btn-edit"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(cat.id)}
          className="btn btn-delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
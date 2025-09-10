"use client";

import { useState, useEffect } from "react";
import '../styles/globals.css'; // Імпортуємо стилі

export default function CatForm({ onSubmit, initialData }: any) {
  const [name, setName] = useState("");
  const [yearsExperience, setYearsExperience] = useState("");
  const [breed, setBreed] = useState("");
  const [salary, setSalary] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setYearsExperience(initialData.years_experience);
      setBreed(initialData.breed);
      setSalary(initialData.salary);
    } else {
      setName("");
      setYearsExperience("");
      setBreed("");
      setSalary("");
    }
    setError("");
  }, [initialData]);

  const handleFocusNumber = (setter: any, value: string) => {
    if (value === "0") setter("");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    try {
      if (initialData) {
        await onSubmit({ salary: Number(salary) });
      } else {
        await onSubmit({
          name,
          years_experience: Number(yearsExperience),
          breed,
          salary: Number(salary),
        });
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        readOnly={!!initialData}
        className={`form-input ${initialData ? "read-only" : ""}`}
      />
      <input
        placeholder="Years of Experience"
        type="number"
        value={yearsExperience}
        onFocus={() => handleFocusNumber(setYearsExperience, yearsExperience)}
        onChange={e => setYearsExperience(e.target.value)}
        readOnly={!!initialData}
        className={`form-input ${initialData ? "read-only" : ""}`}
      />
      <input
        placeholder="Breed"
        value={breed}
        onChange={e => setBreed(e.target.value)}
        readOnly={!!initialData}
        className={`form-input ${initialData ? "read-only" : ""}`}
      />
      <input
        placeholder="Salary"
        type="number"
        value={salary}
        onFocus={() => handleFocusNumber(setSalary, salary)}
        onChange={e => setSalary(e.target.value)}
        className="form-input"
      />

      <button type="submit" className="form-submit">
        {initialData ? "Update" : "Add"} Cat
      </button>

      {error && (
        <p className="error">{error}</p>
      )}
    </form>
  );
}
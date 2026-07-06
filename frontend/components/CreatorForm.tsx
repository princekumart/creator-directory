"use client";

import { useEffect, useState } from "react";

type Creator = {
  id?: string;
  name: string;
  niche: string;
  followerCount: number;
  engagementRate: number;
  email: string;
  status: string;
};

type Props = {
  onClose: () => void;
  onSubmit: (creator: any) => void;
  initialData?: Creator | null;
};

export default function CreatorForm({
  onClose,
  onSubmit,
  initialData,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    niche: "",
    followerCount: "",
    engagementRate: "",
    email: "",
    status: "active",
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name,
        niche: initialData.niche,
        followerCount: String(initialData.followerCount),
        engagementRate: String(initialData.engagementRate),
        email: initialData.email,
        status: initialData.status,
      });
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      ...form,
      followerCount: Number(form.followerCount),
      engagementRate: Number(form.engagementRate),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-[450px]">
        <h2 className="text-2xl font-bold mb-4">
          {initialData ? "Edit Creator" : "Add Creator"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="border p-2 rounded w-full"
            required
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 rounded w-full"
            required
          />

          <input
            name="niche"
            value={form.niche}
            onChange={handleChange}
            placeholder="Niche"
            className="border p-2 rounded w-full"
            required
          />

          <input
            type="number"
            name="followerCount"
            value={form.followerCount}
            onChange={handleChange}
            placeholder="Followers"
            className="border p-2 rounded w-full"
            required
          />

          <input
            type="number"
            step="0.1"
            name="engagementRate"
            value={form.engagementRate}
            onChange={handleChange}
            placeholder="Engagement Rate"
            className="border p-2 rounded w-full"
            required
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="border px-4 py-2 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {initialData ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
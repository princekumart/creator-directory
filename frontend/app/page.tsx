"use client";

import { useState } from "react";
import CreatorTable from "@/components/CreatorTable";
import FilterBar from "@/components/FilterBar";
import CreatorForm from "@/components/CreatorForm";
import { useCreators } from "@/hooks/useCreators";
import { useCreateCreator } from "@/hooks/useCreateCreator";
import { useUpdateCreator } from "@/hooks/useUpdateCreator";
import { useDeleteCreator } from "@/hooks/useDeleteCreator";

export default function Home() {
  const [page, setPage] = useState(1);
  const limit = 10;

  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("asc");

  const [niche, setNiche] = useState("");
  const [minFollowers, setMinFollowers] = useState("");
  const [maxFollowers, setMaxFollowers] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingCreator, setEditingCreator] = useState<any>(null);

  const { mutate: createCreator } = useCreateCreator();
  const { mutate: updateCreator } = useUpdateCreator();
  const { mutate: deleteCreator } = useDeleteCreator();

  const { data, isLoading, error } = useCreators(
    page,
    limit,
    sortBy,
    order,
    niche,
    minFollowers,
    maxFollowers
  );

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(field);
      setOrder("asc");
    }

    setPage(1);
  };

  if (isLoading) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  if (error) {
    return (
      <h2 className="text-center mt-10 text-red-500">
        Error loading creators.
      </h2>
    );
  }

  const creators = data?.data ?? [];
  const totalPages = Math.max(
    1,
    Math.ceil((data?.total ?? 0) / limit)
  );

  return (
    <main className="max-w-7xl mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">
          Creator Directory
        </h1>

        <button
          onClick={() => {
            setEditingCreator(null);
            setShowForm(true);
          }}
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
        >
          + Add Creator
        </button>
      </div>

      <FilterBar
        niche={niche}
        setNiche={(value) => {
          setNiche(value);
          setPage(1);
        }}
        minFollowers={minFollowers}
        setMinFollowers={(value) => {
          setMinFollowers(value);
          setPage(1);
        }}
        maxFollowers={maxFollowers}
        setMaxFollowers={(value) => {
          setMaxFollowers(value);
          setPage(1);
        }}
      />

      <CreatorTable
        creators={creators}
        handleSort={handleSort}
        sortBy={sortBy}
        order={order}
        onEdit={(creator) => {
          setEditingCreator(creator);
          setShowForm(true);
        }}
        onDelete={(id) => {
          deleteCreator(id);
        }}
      />

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          Previous
        </button>

        <span className="font-semibold">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page >= totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>

      {showForm && (
        <CreatorForm
          initialData={editingCreator}
          onClose={() => {
            setShowForm(false);
            setEditingCreator(null);
          }}
          onSubmit={(creator) => {
            if (editingCreator) {
              updateCreator({
                id: editingCreator.id,
                creator,
              });
            } else {
              createCreator(creator);
            }

            setShowForm(false);
            setEditingCreator(null);
          }}
        />
      )}
    </main>
  );
}
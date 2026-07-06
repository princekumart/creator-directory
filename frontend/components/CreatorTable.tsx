type Creator = {
  id: string;
  name: string;
  niche: string;
  followerCount: number;
  engagementRate: number;
  status: string;
};

type Props = {
  creators: Creator[];
  handleSort: (field: string) => void;
  sortBy: string;
  order: string;
  onEdit: (creator: Creator) => void;
  onDelete: (id: string) => void;
};

export default function CreatorTable({
  creators,
  handleSort,
  sortBy,
  order,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-3 text-left">Name</th>

            <th className="px-4 py-3 text-left">Niche</th>

            <th
              onClick={() => handleSort("followerCount")}
              className="px-4 py-3 text-left cursor-pointer hover:bg-blue-700"
            >
              Followers{" "}
              {sortBy === "followerCount"
                ? order === "asc"
                  ? "↑"
                  : "↓"
                : "↕"}
            </th>

            <th
              onClick={() => handleSort("engagementRate")}
              className="px-4 py-3 text-left cursor-pointer hover:bg-blue-700"
            >
              Engagement{" "}
              {sortBy === "engagementRate"
                ? order === "asc"
                  ? "↑"
                  : "↓"
                : "↕"}
            </th>

            <th className="px-4 py-3 text-left">Status</th>

            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {creators.map((creator) => (
            <tr
              key={creator.id}
              className="border-b hover:bg-gray-100 transition"
            >
              <td className="px-4 py-3">{creator.name}</td>

              <td className="px-4 py-3 capitalize">
                {creator.niche}
              </td>

              <td className="px-4 py-3">
                {creator.followerCount.toLocaleString()}
              </td>

              <td className="px-4 py-3">
                {creator.engagementRate}%
              </td>

              <td className="px-4 py-3">
                <span
                  className={`px-3 py-1 rounded-full text-white text-sm ${
                    creator.status === "active"
                      ? "bg-green-600"
                      : "bg-red-500"
                  }`}
                >
                  {creator.status}
                </span>
              </td>

              <td className="px-4 py-3 text-center space-x-2">
                <button
                  onClick={() => onEdit(creator)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this creator?"
                      )
                    ) {
                      onDelete(creator.id);
                    }
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
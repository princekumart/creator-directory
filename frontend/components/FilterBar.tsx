type Props = {
  niche: string;
  setNiche: (value: string) => void;

  minFollowers: string;
  setMinFollowers: (value: string) => void;

  maxFollowers: string;
  setMaxFollowers: (value: string) => void;
};

export default function FilterBar({
  niche,
  setNiche,
  minFollowers,
  setMinFollowers,
  maxFollowers,
  setMaxFollowers,
}: Props) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">

      <select
        value={niche}
        onChange={(e) => setNiche(e.target.value)}
        className="border rounded-lg px-4 py-2"
      >
        <option value="">All Niches</option>
        <option value="beauty">Beauty</option>
        <option value="fitness">Fitness</option>
        <option value="travel">Travel</option>
        <option value="food">Food</option>
        <option value="tech">Tech</option>
        <option value="fashion">Fashion</option>
      </select>

      <input
        type="number"
        placeholder="Min Followers"
        value={minFollowers}
        onChange={(e) => setMinFollowers(e.target.value)}
        className="border rounded-lg px-4 py-2"
      />

      <input
        type="number"
        placeholder="Max Followers"
        value={maxFollowers}
        onChange={(e) => setMaxFollowers(e.target.value)}
        className="border rounded-lg px-4 py-2"
      />

    </div>
  );
}
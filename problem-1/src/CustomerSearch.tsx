import { useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";

async function fetchData(signal: AbortSignal, value: string) {
  const response = await fetch(`/api/customers?search=${value}`, {
    signal: signal,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch the data");
  }

  const data = await response.json();
  return data;
}

const CustomerSearch = () => {
  const [search, setSearch] = useState("");
  const finalSearch = useDebounce(search, 400);

  const { data, isPending, error, isError } = useQuery({
    queryKey: ["customer", finalSearch],
    queryFn: ({ signal }) => fetchData(signal, finalSearch),
    enabled: Boolean(finalSearch),
    staleTime: 60 * 1000,
  });

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search here..."
      />

      {isPending && <p>Loading....</p>}

      {isError && <p>{error.message}</p>}

      {data && (
        <div key={data.id}>
          <h3>{data.name}</h3>
          <p>{data.email}</p>
        </div>
      )}
    </div>
  );
};

export default CustomerSearch;

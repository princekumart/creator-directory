import { useQuery } from "@tanstack/react-query";
import api from "@/services/api";

export const useCreators = (
  page: number,
  limit: number,
  sortBy: string,
  order: string,
  niche: string,
  minFollowers: string,
  maxFollowers: string
) => {
  return useQuery({
    queryKey: [
      "creators",
      page,
      limit,
      sortBy,
      order,
      niche,
      minFollowers,
      maxFollowers,
    ],

    queryFn: async () => {
      const res = await api.get("/creators", {
        params: {
          page,
          limit,
          sortBy,
          order,
          niche,
          minFollowers,
          maxFollowers,
        },
      });

      return res.data;
    },

    placeholderData: (previousData) => previousData,
  });
};
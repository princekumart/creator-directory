import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/services/api";

export const useCreateCreator = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (creator: any) => {
      const res = await api.post("/creators", creator);
      return res.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["creators"],
      });
    },
  });
};
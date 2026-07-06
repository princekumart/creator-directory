import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/services/api";

export const useDeleteCreator = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/creators/${id}`);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["creators"],
      });
    },
  });
};
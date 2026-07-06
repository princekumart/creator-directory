import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/services/api";

export const useUpdateCreator = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      creator,
    }: {
      id: string;
      creator: any;
    }) => {
      const res = await api.patch(`/creators/${id}`, creator);
      return res.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["creators"],
      });
    },
  });
};
import { useQuery } from "@tanstack/react-query";
import { instance } from "./instance";

export const useCarCountQuery = () => {
  return useQuery({
    queryKey: ["todayOverview"], // 이벤트와 동일하게 통일
    queryFn: async () => {
      const response = await instance.get(`/todayOverview`);
      return response?.data ?? { todayLogs: [], parkingCount: 0 };

    },
    refetchOnWindowFocus: false,
    retry: 0,
  });
};
import { ApiResponse, BugType } from "@/global";
import { axios, ExtractFnReturnType, QueryConfig } from "@/lib";
import { useQuery } from "@tanstack/react-query";

export const getBugById = (projectId: number, bugId: number): Promise<ApiResponse<BugType>> => {
  return axios.get(`/bug/${projectId}/${bugId}`);
};


type QueryFnType = typeof getBugById;

type useGetBugByIdOptions = {
  bugId: number
  projectId: number
  config?: QueryConfig<QueryFnType>
};

export const useGetBugById = ({ bugId, projectId, config }: useGetBugByIdOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["bug/", projectId, bugId],
    queryFn: () => getBugById(bugId, projectId),
    ...config
  });
};
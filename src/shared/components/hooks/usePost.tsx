import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { QUERY_KEYS } from "@/shared/constants/queryKeys";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getData = async (): Promise<Post[]> => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

export function usePosts(isEnabled: boolean) {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const { data, isLoading, isSuccess, isError, error } = useQuery<Post[]>({
    queryKey: [QUERY_KEYS.POSTS],
    queryFn: getData,
    enabled: isEnabled,
  });

  useEffect(() => {
    if (isSuccess) console.log("Data fetching successfully");
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError) console.log("Error fetching data");
  }, [isError]);

  return {
    data,
    isLoading,
    isSuccess,
    isError,
    error,
    search,
    setSearch,
    selectedUser,
    setSelectedUser,
  };
}

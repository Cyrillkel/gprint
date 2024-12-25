"use client";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { usePosts } from "./hooks/usePost";

const queryClient = new QueryClient();

const isAuth = true;

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function QueryProvider() {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error,
    search,
    setSearch,
    selectedUser,
    setSelectedUser,
  } = usePosts(isAuth);

  const filteredPosts = data
    ?.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    )
    .filter((post) =>
      selectedUser ? post.userId === Number(selectedUser) : true
    );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="mb-4 flex gap-4">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded"
        />

        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Users</option>
          {[...new Set(data?.map((post) => post.userId))].map((userId) => (
            <option key={userId} value={userId.toString()}>
              User {userId}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts?.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded shadow">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
              {post.id}
            </span>
            <h2 className="text-xl font-bold mt-2 mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </div>
        ))}
      </div>

      {filteredPosts?.length === 0 && (
        <div className="text-center mt-4">No posts found</div>
      )}
    </div>
  );
}

// export default function QueryProvider() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <PostList />
//     </QueryClientProvider>
//   );
// }

// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// const getData = async (): Promise<Post[]> => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (!response) {
//     throw new Error("Faild to fetch post");
//   }
//   return response.json();
// };

// console.log(Error);

// function QueryProvider() {
//   const { data, error, isLoading } = useQuery<Post[]>({
//     queryKey: ["posts"],
//     queryFn: getData,
//   });

//   const filterData = data?.filter(
//     (post: any) =>
//       post.id === 1 || post.id === 2 || post.id === 3 || post.id === 4
//   ); //filter by id

//   //search

//   const [search, setSearch] = useState(""); // state for search
//   const [selectedUser, setSelectUser] = useState(""); // state for select userId

//   const filterdPost = data
//     ?.filter(
//       (post: any) =>
//         post.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
//         post.body.toLowerCase().includes(search.toLocaleLowerCase())
//     ) // Search by title or content
//     .filter((post: any) =>
//       selectedUser ? post.userId === Number(selectedUser) : true
//     );

//   return (
//     <div className="container m-auto bg-red-400 p-6 grid grid-cols-3 gap-4">
//       <div className="bg-gray-100 p-6">
//         <div className="mb-4 flex gap-4">
//           {/* Поле для поиска */}
//           <input
//             type="text"
//             placeholder="Search posts..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="p-2 border rounded"
//           />

//           {/* Селектор для выбора userId */}
//           <select
//             value={selectedUser}
//             onChange={(e) => setSelectUser(e.target.value)}
//             className="p-2 border rounded"
//           >
//             <option value="">All Users</option>
//             {[...new Set(data?.map((post: any) => post.userId))].map(
//               (userId) => (
//                 <option key={userId} value={userId}>
//                   User {userId}
//                 </option>
//               )
//             )}
//           </select>
//         </div>
//         <div>
//           {isLoading
//             ? "isloading..."
//             : filterData?.length
//             ? filterData.map((post: any) => (
//                 <div className="" key={post.id}>
//                   <span className="bg-red-100">{post.id}</span>
//                   <h2 className="bg-green-400"> {post.title}</h2>
//                   <p className="bg-orange-400">{post.body}</p>
//                 </div>
//               ))
//             : "not found"}
//         </div>
//       </div>
//     </div>
//   );
// }

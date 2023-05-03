import ms from 'ms';
import genres from '../data/genres';
import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

/* React Query Introduction 😇 (#3)
We are going to use the `useQuery` hook to fetch data from an API. A `useQuery`
hook takes a key and a function that returns a promise. The key is used to cache
the data and is a unique identifier. Each time we retrieve data from a backend, 
its stored in our cache and is accessible via the key. The second argument is a
"callback" function that is used to fetch data from a backend. React Query does
not care how we fetch data from the backend. It could be Axios, Fetch etc... 

> Advantages of using `useQuery` hook:
- Auto Retries on failed requests
- Auto Refreshing "refetching" so we remain in stale view
- Data cached by default preventing unnecessary backend requests
- Request cancellation when the component unmounts (cleanup)

Another advantage with React Query we no longer have to declare separate state &
effects variables for capturing API data, errors, or loading state. 🥳 */

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => {
  return useQuery({
    // 👇🏻 We pass a key to the query hook to cache the data and identify it in
    // the cache. The key is a unique identifier for this query. We can pass an
    // array of keys to the query hook to cache multiple queries.
    queryKey: ['genres'],
    // 👇🏻 We pass a function to the query hook that returns a promise. This is
    // the function that fetches data from the API. React Query does not care
    // how we fetch data from the backend. It could be Axios, Fetch etc...
    queryFn: apiClient.readAll,
    // apiClient.get<FetchResponse<Genre>>('/genres').then((res) => res.data),
    // 👇🏻 We can pass a stale time to the query hook to prevent unnecessary
    // refetching of data. This is useful when we want to prevent the UI from
    // updating too frequently in response to data changes.
    staleTime: ms('24h'),
    // 👇🏻 We can also pass initial data to the query hook to avoid loading
    // state when the component mounts for the first time.
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;

/* # React Query Overview
React Query is a powerful data-fetching and state management library for React
applications. It helps you manage server state in your React applications by
handling caching, background fetching, and automatic refetching of data. With
React Query, you can efficiently fetch, cache, and sync server data in your
application, reducing the need for manual state management. 

Let's look at a simple example of how to use React Query in a React application:

1. First, install React Query using npm or yarn:

```bash
npm install react-query
```

2. Next, let's create a simple component that fetches data from an API and
   displays it using React Query: 

```jsx
import React from "react";
import { useQuery } from "react-query";
// This is a mock API function that fetches data
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  return response.json();
};

const Posts = () => {
  // Here, we're using the useQuery hook to fetch data
  // The first argument is a query key, which is a unique identifier for this query
  // The second argument is the function that fetches data from the API
  const { data, status } = useQuery(["posts"], fetchPosts);

  if (status === "loading") return <p>Loading...</p>
  if (status === "error") return <p>Error fetching data</p>
  // If the status is "success", we can display the fetched data
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
```

In this example, we use the `useQuery` hook to fetch data from a mock API. The
`useQuery` hook returns an object with `data` and `status`. We use the `status`
to conditionally render different UI elements based on fetching state (loading,
error, or success). When the status is "success", we render the fetched data.

React Query will automatically cache (client-side) the fetched data and refetch
it in the background when needed. This ensures that your application always has
the most up-to-date data while minimizing the number of API requests. 

You can further customize the behavior of React Query (e.g. refetch intervals,
cache time, etc.) by passing a configuration object as a "third" argument to the
`useQuery` hook or by wrapping your `App` with a `QueryClientProvider` & setting
default configurations. For more information, you can refer to the official
React Query documentation: https://react-query.tanstack.com/overview  */

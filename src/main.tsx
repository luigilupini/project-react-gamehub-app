import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import theme from './theme.ts';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes.tsx';

const queryClient = new QueryClient();

// REACT ROUTER: USE ROUTER PROVIDER COMPONENT (STEP 2) ⭐️
// All data `router` objects are passed to this component to render your App and
// enable the rest of the data APIs. This provider component "provides" context
// for sharing the `router` via router prop to the rest of the application. This
// allows us to use hooks like `useRoutes` & `useNavigate` anywhere in our app.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* cSpell:disable */}
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        {/* So instead of rendering a specific component like the App component,
        rather we render the `RouterProvider` & let it determine based on routing
        what component needs to be called based on the users path location. */}
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);

/* REACT QUERY: WHY WE NEED IT? (STEP 2) 🤩
- React Query is a data fetching library for React
- It provides hooks for fetching, caching, updating asynchronous data in React
- Alternative state management libraries to Redux, MobX etc...
- Alternative data fetching libraries to Axios, Fetch etc...

`QueryClient` is the core of React Query. A provides React Query hooks with the
`QueryClient` instance. The glue that holds every thing together. Your single
source of truth for all data fetching & caching logic in your application.

```jsx
// Create an instance of QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    // Overwrite global query(s) default options (recommended for most apps):
    // We can also define at a per query using the `useQuery` hook.
    queries: {
      retry: 3, // 👈🏻 default amount of retries on failed queries

      cacheTime: 1000 * 60 * 5, // 👈🏻 default cache time is 5 minutes
      // If a query has no observer meaning no component subscribed to it, then
      // the query can be "garbage collected" after 5 minutes.

      staleTime: 1000, // 👈🏻 default stale time is 0 (data is immediate stale)
      // This is the amount of time a data is considered fresh & not re-fetched
      // before it becomes "stale" and is then auto re-fetched in the background
      // (This is the most configured option). Its dependent on the data you are
      // fetching. For example, if you are fetching data changing every 5 minute
      // then set it to stale in that range. Dashboards need lower thresholds.

      // * AUTO-REFETCHING OF STALE DATA OCCURS UNDER THREE CONDITIONS:
      // - Client browser regains network connection "refetchOnReconnect: true"
      // - A component mounts/updates a query re-fetched "refetchOnMount: true"
      // - When the `window` regains its focus "refetchOnWindowFocus: true"
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      refetchOnMount: true,
    },
  },
});
```

* Installation at project folder: `npm i @tanstack/react-query`

Overview of some default options you can configure for `QueryClient`:

1) `defaultOptions.queries`: An object with default options for queries.

- `queryKeyHashFn`: A custom function to hash query keys.
- `cacheTime`: Time unused/inactive cache data remains in memory.
- `staleTime`: Time after data is considered stale and will be re-fetched.
- `refetchOnWindowFocus`: Refetch queries when the window regains focus.
- `refetchOnReconnect`: Refetch queries when browser regains network connection. 
- `retry`: The number of times to retry a failed query before marking it error. 
- `retryOnMount`: Retry failed queries when they are mounted again.
- `suspense`: Whether enable experimental React suspense support. 

2) `defaultOptions.mutations`: An object with default options for mutations.

- `mutationKeyHashFn`: A custom function to hash mutation keys.
- `retry`: Times to retry a failed mutation before marking it as an error. 
- `retryDelay`: A function that receives the failure count and returns delay.


`QueryClientProvider` is a React Context Provider that provides the React Query
hooks with the `QueryClient` instance. We passing it to our component tree. We
pass the `QueryClient` instance to the `QueryClientProvider` client prop. */

/* REACT QUERY: DEVTOOLS (STEP 4) 🤩
A development tool that comes with the React Query library. It provides a user
interface for inspecting and debugging the queries, mutations, and cache data
within your React application.

With `ReactQueryDevtools` you can easily monitor the state of queries, visualize
caching, and interact with your application's data-fetching layer.  

To use `ReactQueryDevtools`, follow these steps:

1. First, install React Query Devtools using npm or yarn:

```bash
npm install react-query-devtools
```

2. Next import `ReactQueryDevtools` and include it in your root component or the
   component where you use `QueryClientProvider`.

Make sure it's included only in your development environment:

```jsx
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
const queryClient = new QueryClient();
// Include ReactQueryDevtools within the QueryClientProvider 
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
};

export default App;
```

Now, when you run your application in development mode, you will see a small
toggle button in the bottom-right corner of the screen. Clicking on the button
will open the `ReactQueryDevtools` panel, where you can inspect and interact
with the queries, cache data, and mutation statuses in your application. 

`ReactQueryDevtools` provides several features to help debug & optimize queries:

- View of all active queries with current status (loading, success, error)
- Detailed info about individual queries, like cache data, query key, timings
- Manually refetch queries, remove cache data, or toggle background refetching
- View of all active mutations with current status (idle, loading, success, error)
- Visualization of cache data, including nested query data and dependent queries

Keep in mind that `ReactQueryDevtools` is intended for development use only and
should not be included in your production build. Conditionally include it based
on your environment, as shown in the example above.

In the context of React Query, a "mutation" refers to a query that modifies or
alters data on the server, such as creating, updating, or deleting data (CRUD).

Unlike "read" queries that fetch and cache data, mutations are responsible for
making changes to data and then invalidating cache so that the affected parts of
the cache serving that data keeps up-to-date and not stale. Invalidated cache is
then re-fetched in the background to keep the data fresh.

Mutations are commonly associated with (CRUD) RESTful API method like POST, PUT,
PATCH, DELETE or with GraphQL mutations. In React Query, use `useMutation` hook
to perform mutations and manage their state (e.g., loading, error, or success).
*/

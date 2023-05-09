import LayoutPage from './pages/LayoutPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import GameDetailPage from './pages/GameDetailPage';

// CREATE A BROWSER ROUTER INSTANCE WITH ROUTES (STEP 2) ⭐️
// This is the recommended router for all React Router web projects. It uses the
// DOM History API to update the URL and manage the history stack. Enabling the
// v6.4 data APIs like loaders, actions, fetchers and more.
import { createBrowserRouter } from 'react-router-dom';

// With `createBrowserRouter` we define a `routes` array of Route objects that
// can have nested routes on the `children` property.
const router = createBrowserRouter([
  // NESTED ROUTES REQUIRES A NESTED STRUCTURE (STEP 3) ⭐️
  // We can nest routes by defining a `children` property on a route object. In
  // real world apps we typically have a `Layout` component that has default UI
  // elements to render on every route/page like a `Navbar`, `Auth` etc. Layout
  // represents a top level tier for other routes and uses a `Outlet` component.
  // An `Outlet` component is a placeholder for nested routes and in turn child
  // components to be rendered. So at runtime depending on the user location in
  // the app, different components will be rendered inside the `Outlet`.
  {
    path: '/',
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    // Provide child routes inside the `children` property of a route object.
    // The `path` property of a child route is relative to the parent route. So
    // the `path` property of the `HomePage` route is `/` and not `/home`. The
    // `path` property of the `UserListPage` route is `/users` etc...
    // Here the parent route `/` has children routes 🐣 nested:
    children: [
      // Here if `index` true then the user is at the location of their parent,
      // being `/`. In that case render `HomePage` as default. Meaning this is
      // the `index` within this routes array must render first in the `Outlet`
      // component or we can set path to an empty string.
      {
        index: true,
        element: <HomePage />,
      },
      // PASSING DATA WITH ROUTE PARAMETERS (STEP 4) ⭐️
      // React Router v6 provides a new way to pass data to a route component. We
      // can pass data to a route component using route parameters. By using a `:`
      // prefix in the route path. Now the `id` parameter will be available in the
      // `UserListPage` component via a `useParams` hook. A problem with previous
      // versions of (RRv5) we had to specify the most "specific" routes first. In
      // (RRv6) the library will automatically figure it out whats most specific.
      // That means we can define `routes.tsx` in any order we like 🥳.
      {
        path: 'games/:slug',
        element: <GameDetailPage />,
      },
    ],
  },
]);

export default router;

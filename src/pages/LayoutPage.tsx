import { Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

// SUPPLY GENERAL LAYOUT IN PAGES FOLDER (STEP 1) ⭐️
// Within the `src/pages` folder, create a file called `Layout.tsx` file and add
// the following code to make it the main layout for all pages:
import { Outlet } from 'react-router-dom';

export default function LayoutPage() {
  return (
    <Box paddingX={5}>
      <Navbar />
      {/* NESTED ROUTES (STEP 3) ⭐️ */}
      {/* The Outlet component will be used here to render child routes */}
      <Outlet />
    </Box>
  );
}

/* NESTED ROUTES SUPPORTED BY USING AN OUTLET COMPONENT (STEP 3) ⭐️
Nested routes in React Router allow you to create hierarchical routing structure
in your application, where child routes are rendered within their parent routes.
This is useful for organizing complex Apps with multiple levels of navigation.

RRv6 an `Outlet` component is used to render child routes within a parent route.

1) Create components for parent and child routes: First, create the components
that you want to use as parent `Layout` and its nested child routes. For example
under the Layout, you want to have child routes rendered.

2) Define the routing structure: see `routes.tsx` on how we define the routing.
We can nest routes by defining a `children` property on a route object.

Example if a user navigates to `/users` the `UserListPage` component renders but
now from inside the `Outlet` component within the parenting `Layout` component.
That ensures that the `NavBar` UI is always rendered on every page/route. */

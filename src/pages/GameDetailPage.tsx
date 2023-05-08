// GETTING DATA FROM CURRENT ROUTE WITH HOOKS (STEP 5) ⭐️
// Sometimes we need to know what route/page we on or what route parameters are
// available and passed to the URL. We have helpful hooks 🪝 to get info about a
// current route/path that the client is navigated toward.

import { Heading, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import useGame from '../hooks/useGame';

// * useParams
// React Router v6 provides a new way to pass data to a route component. We can
// pass data to a route component using route parameters. By using a `:` prefix
// as seen in our `routes.tsx` file. Now the `id` parameter will be available in
// the `UserDetailPage` component via `useParams` hook.

// * useSearchParams
// We also have `useSearchParams` hook that allows us to update the query string
// parameters in the URL. This hook returns a tuple with the first element being
// an object with the current search params and a second being a function. Just
// like `useState` that returns state and the state updater function.

// > Beware of `useSearchParams` setter function as it introduces a side effect.
// > You need to wrap it within `useEffect` hook, it reaches outside your React
// > component via a browser API and updates the URL in the browser.

// * useLocation
// We also have the `useLocation` hook that returns the current location object.
// It contains information about the current URL path and query string params.
export default function GameDetailPage() {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug || '');
  if (isLoading) return <Spinner />;
  if (error || !data) throw error;
  return (
    <>
      <Heading>{data?.name}</Heading>
      <ExpandableText>{data?.description_raw}</ExpandableText>
      <GameAttributes game={data} />
    </>
  );
}

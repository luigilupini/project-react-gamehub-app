import { create } from 'zustand';

// DEFINE SHAPE OF STORE (STEP 1) ⭐️
// First we define the shape/type of our this store
interface Query {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}
// DEFINE SHAPE OF STORE (STEP 1) ⭐️
// First we define the shape/type of our this store
interface GameQueryStore {
  // This is the initial state of the store and we can use `set` to update it.
  // You can also use immer here to make and follow immutable patterns.
  // Keeping things simple we'll just pass `set` updater function.
  // As seen with `useState` hooks we can pass a callback to update state.
  query: Query;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

// CREATE THE STORE AND INITIAL STATE (STEP 2) ⭐️
const useGameQueryStore = create<GameQueryStore>((set) => {
  return {
    query: {},
    setSearchText: (searchText) =>
      set((snapshot) => ({
        query: { ...snapshot.query, searchText },
      })),
    setGenreId: (genreId) =>
      set((snapshot) => ({
        query: { ...snapshot.query, genreId },
      })),
    setPlatformId: (platformId) =>
      set((snapshot) => ({
        query: { ...snapshot.query, platformId },
      })),
    setSortOrder: (sortOrder) =>
      set((snapshot) => ({
        query: { ...snapshot.query, sortOrder },
      })),
  };
  // Now we can use a custom hook anywhere in our app to access this store.
  // * THE ADVANTAGES OF ZUSTAND
  // - We don't need to use a context API
  // - We don't need to use a Providers to wrap components (Provider Hell)
  // - We don't need to use a reducer to update state
  // - We don't need any redux boilerplate or middleware to manage state
  // - As complete solution we use React Query to manage "async" server state
  // - Zustand is a simple, lightweight alternative to Redux 🥳
});

export default useGameQueryStore;

/* In React, rendering is indeed a "snapshot" of the UI at a particular point in
time, and the state of the component determines the UI's appearance & behavior. 

# Rendering takes a snapshot in time
(https://react.dev/learn/state-as-a-snapshot)

“Rendering” means that React is calling your component, which is a function. The
JSX you return from that function is like a "snapshot" of the UI in time. So its
props, event handlers, and local variables are/were calculated using its `state`
at the time of the render "snapshot". 

Unlike a photograph or a movie frame, the UI “snapshot” you return interactive.
Example it includes logic like event handlers specifying what occurs in response
to inputs. Reacts job is to update "commit" to a screen to match this "snapshot"
and connects event handlers, state and props etc. As a result, pressing a button
will trigger a click handler within your JSX. 

When React re-renders a component:
1) React calls/invokes your functional component
2) Our React component/function returns a new JSX "snapshot"
3) React compares "diffing" the new "snapshot" to the previous
3) React updates the screen "commits" to match our "snapshot" returned

When using Zustand the process of updating the state is similar to how you would
update state with `useState` indirectly by passing a function that has access to
previous state. This ensures that the state updates are based on the most recent
state changes and not stale state. For more information see these topics: React 
waits until all code in event handlers run before processing state updates.

# Updating the same state multiple times before the next render 
(https://react.dev/learn/queueing-a-series-of-state-updates)

Uncommon use in normal direct use of `useState`, but if you would like to update
the same state multiple times before the next render instead of passing the next
state value like setNumber(number + 1), with `useState` you can pass a function
that calculates the next state based on the previous one in the "snapshot" queue
like setNumber(n => n + 1). It is a way to tell React to “do something with the
state value” instead of just replacing it.

The core difference between using `useState` and Zustand lies in how the state
is managed. With `useState`, the state is local to the component, with Zustand
the state is managed globally and can be accessed by multiple components. This
makes Zustand suitable for managing complex state interactions spanning across
multiple components in your application.

When using Zustand, the rendering process remains the same as you described:
1) React calls your component function (uses Zustand store to read/update state)
2) Your function returns new JSX "snapshot" based on current state to "diff"
3) React updates the screen "commits" to match "snapshot" change in the JSX.

Overall, Zustand simplifies the process of managing global state in a React app
while still adhering to React's rendering and state update principles. Remember
Zustand works by allowing you to update the state indirectly through functions,
similarly to how you can pass functions to `setState`.

When updating the state in Zustand, you pass a function to the set method, which
receives the previous state as its argument from the previous "snapshot" of your
state, props, event handlers etc within your JSX. This function should return an
object containing new state values. This approach ensures you're always working
with the most recent state values.

In summary, when you update state using a function in both Zustand and useState,
you're working with the most recent state values, rather than awaiting the next
batched rendered "snapshot". This approach ensures your state updates are based
on the latest state helping avoid issues with stale or outdated state values. */

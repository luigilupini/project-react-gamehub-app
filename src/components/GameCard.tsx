import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import imageCropper from '../services/image-cropper';

import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import Rating from './Rating';

import { Link } from 'react-router-dom';

import Game from '../interfaces/Game';

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  const allPlatforms = game.parent_platforms.map(
    (platform) => platform.platform
  );
  return (
    <Card height="100%">
      <Image src={imageCropper(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList platforms={allPlatforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="lg" isTruncated>
          <Link to={`games/${game.slug}`}> {game.name}</Link>
        </Heading>
        <Rating rating={game.rating_top} />
      </CardBody>
    </Card>
  );
}

/* # LINK COMPONENT EXPLAINED (STEP 2) ⭐️
The <Link> component is essentially a wrapper around the HTML <a> tag, with some
additional functionality. It takes care of updating the URL in a browser address
bar and tells React Router to render a appropriate component for that new route. 

When a user clicks on a <Link> component, React Router intercepts a click event,
preventing the default behavior of an `<a>` tag (known as the full page reload).
Instead, it updates browser's history and URL without causing page refresh. This
is known as client-side navigation.

Here's a breakdown of the important aspects of the <Link> component:

1) `to` prop: The to prop is the most important prop of the <Link> component. It
specifies the target route to navigate to when the <Link> is clicked. The `to`
prop can accept a string, which represents the path of the new route or object
with more advanced configurations (like state or query parameters). 

2) Event handling: When a user clicks on a <Link>, React Router intercepts click
events & calls `event.preventDefault`, and updates the browser history using the
HTML5 `pushState` API. This ensures that the full page reload doesn't occur.

3) Integration with Router components: The <Link> component must be used within
a <Router> component (such as <BrowserRouter>, <HashRouter>, or <MemoryRouter>),
which provides the necessary context API to handle navigation.

4) Styling: The <Link> component renders an <a> tag under the hood, so you can
style it just like any other anchor tag. Additionally, React Router provides a
<NavLink> component, an extension of <Link> that allows you to apply CSS styles
when the link is active.

Here's an example of how the <Link> component in an React Router application:

```jsx
const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}
```
Of course we have gone for a routes.tsx file instead of defining the routes in
the App component directly and we passing it to our RouterProvider for context.

The <Link> component is a great way to enable client-side navigation between the
pages of your application. It's a simple component that works out of the box and
doesn't require any additional configuration. */

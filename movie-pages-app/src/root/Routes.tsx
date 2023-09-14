import Movies from '../pages/movies';
import Home from '../pages/home';
import { useEffect, useRef } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import TVShows from '../pages/tv-shows';
import MostWatched from '../pages/most-watched';
import CommingSoon from '../pages/comming-soon';
import Overview from '../pages/overview';

const Routes: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  let location = useLocation();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [location]);

  return (
    <div ref={scrollRef}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/tv-shows">
          <TVShows />
        </Route>
        <Route exact path="/comming-soon">
          <CommingSoon />
        </Route>
        <Route exact path="/most-watched">
          <MostWatched />
        </Route>
        <Route exact path="/movie/:id">
          <Overview />
        </Route>
      </Switch>
    </div>
  );
};
export default Routes;

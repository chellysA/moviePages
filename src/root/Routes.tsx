import Movies from "../pages/Movies";
import Home from "../pages/Home";
import { useEffect, useRef } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import TVShows from "../pages/TvShows";
import MostWatched from "../pages/MostWatched";
import CommingSoon from "../pages/CommingSoon";
import SearchResults from "../pages/SearchResults";
import Overview from "../pages/Overview";

const Routes: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  let location = useLocation();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
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
        <Route exact path="/tv_shows">
          <TVShows />
        </Route>
        <Route exact path="/comming_soon">
          <CommingSoon />
        </Route>
        <Route exact path="/most_watched">
          <MostWatched />
        </Route>
        <Route exact path="/movie/:id">
          <Overview filmType="movie" />
        </Route>
        <Route exact path="/tv_shows/:id">
          <Overview filmType="tv" />
        </Route>
        <Route path="/search">
          <SearchResults />
        </Route>
      </Switch>
    </div>
  );
};
export default Routes;

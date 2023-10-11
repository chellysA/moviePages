import Movies from "../pages/Movies";
import Home from "../pages/Home";
import { useEffect, useRef } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import TVShows from "../pages/TvShows";
import CommingSoon from "../pages/CommingSoon";
import SearchResults from "../pages/SearchResults";
import Overview from "../pages/Overview";
import useGetMovieGenre from "../hooks/api/useGetMovieGenre";
import useGetTvGenre from "../hooks/api/useGetTvGenre";
import routes from "../constants/Routes";

const Routes: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  let location = useLocation();
  const { getMovieGenre } = useGetMovieGenre();
  const {getTvGenre} = useGetTvGenre()

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [location]);

useEffect(()=>{
getMovieGenre()
getTvGenre()

},[])

  return (
    <div ref={scrollRef}>
      <Switch>
        <Route exact path={routes.HOME}>
          <Home />
        </Route>
        <Route exact path={routes.MOVIES}>
          <Movies />
        </Route>
        <Route exact path={routes.TV_SHOWS}>
          <TVShows />
        </Route>
        <Route exact path={routes.COMING_SOON}>
          <CommingSoon />
        </Route>
        <Route exact path="/movie/:id">
          <Overview filmType="movie" />
        </Route>
        <Route exact path="/tv_shows/:id">
          <Overview filmType="tv" />
        </Route>
        <Route path={routes.SEARCH_RESULTS}>
          <SearchResults />
        </Route>
      </Switch>
    </div>
  );
};
export default Routes;

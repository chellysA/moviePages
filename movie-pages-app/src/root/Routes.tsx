import { useEffect, useRef } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

const Routes: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  let location = useLocation();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [location]);

  return (
    <div ref={scrollRef}>
      <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/movies"></Route>
        <Route exact path="/tv-shows"></Route>
      </Switch>
    </div>
  );
};
export default Routes;

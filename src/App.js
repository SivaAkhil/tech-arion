import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Counter from "./components/Counter";
import Posts from "./components/Posts";
import AuthPage from "./pages/AuthPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/auth" component={AuthPage} />
        <Route exact component={ErrorPage} />
      </Switch>
    </Router>
  );
}

{
  /* <div className="grid place-items-center py-5 gap-10">
    </div> */
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignUpContainer } from "./containers/SignUp";
import { UsersContainer } from "./containers/Users";
import { ChartContainer } from "./containers/Chart";
import { PdfDownloadContainer } from "./containers/PdfDownload";

const App = () => {
  return (
    <Router>
        <Switch>
          <Route path='/sign-up' component={SignUpContainer} />
          <Route path='/chart' component={ChartContainer} />
          <Route path='/pdf-download' component={PdfDownloadContainer} />
          <Route path='/' component={UsersContainer} />
        </Switch>
    </Router>
  );
}

export default App;

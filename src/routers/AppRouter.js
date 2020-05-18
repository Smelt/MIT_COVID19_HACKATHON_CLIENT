import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline, Typography } from '@material-ui/core'
import Splash from '../containers/Splash';
import Dashboard from '../containers/Dashboard';
import Monitor from '../containers/Monitor';
import theme from '../styles/theme';

class AppRouter extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={theme}>
              <Switch>
                <Route exact={true} path="/Monitor" component={Monitor}/>
                <Route exact={true} path="/Dashboard" component={Dashboard}/>
                <Route exact={true} path="/" component={Splash} />
              </Switch>
          </ThemeProvider>
        </React.Fragment>
       </BrowserRouter>
    );
  }
}
export default AppRouter;


import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "../components/Header.component";
import Footer from "../components/Footer.component";
import Cover from "../components/cover/";
import theme from '../styles/theme'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import Splash from '../containers/Splash';
import Dashboard from '../containers/Dashboard';
/*
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
*/

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


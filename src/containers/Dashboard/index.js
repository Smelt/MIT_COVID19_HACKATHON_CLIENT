import React from 'react';
import { styles } from './styles';
import { withStyles, withTheme } from '@material-ui/core/styles';

class Dashboard extends React.Component {

    render() {
        const { classes, theme } = this.props;

        return (
            <h1>Dashboard</h1>
        )
    }

}
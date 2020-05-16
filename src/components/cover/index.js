import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import clsx from 'clsx'
import { makeStyles, withTheme } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, List, Typography, Divider } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'

import { styles } from './styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


class Cover extends React.Component {

    constructor(props) {
        super(props);
    }
    
    state = {
        open: false 
    }

    handleDrawerOpen = () => {
        this.setState({
            open: true
        })
    }

    handleDrawerClose = () => {
        this.setState({
            open: false 
        })
    }


    render() {
        const { open } = this.state
        const { classes, theme } = this.props
        return (
            <div className={classes.root}>
                
                        <Typography variant="h6" noWrap>
                            Options IQ
          </Typography>
                   
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {this.props.children}
                </main>
            </div>
        );
    }

}

export default withTheme(withStyles(styles)(Cover))
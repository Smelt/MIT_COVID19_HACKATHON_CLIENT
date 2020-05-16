import React from 'react'
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import { withStyles, withTheme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'
import { Typography } from '@material-ui/core'
import { styles } from './styles'
import Fab from '@material-ui/core/Fab'
import { Select, InputLabel, Button } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import OptionModal from './optionModal'


class LongCall extends React.Component {
    state = {
        password: '',
        username: ''
    }

    componentDidMount() {
        setTimeout(() => {
            this.setUsername();
            this.setPassWord();
        }, 1000)
    }

    setUsername() {
        const username = 'Test User';
        let sumRandom = 0;
        for (let i = 0; i <= username.length; i++) {
            sumRandom += Math.floor(Math.random() * 50) + 50;
            setTimeout(() => {
                this.setState({
                    username: username.substring(0, i)
                })
            }, sumRandom)
        }
        sumRandom += 400;
        const password = 'VeryLongPassWord'
        for (let i = 0; i <= password.length; i++) {
            sumRandom += Math.floor(Math.random() * 50) + 50;
            setTimeout(() => {
                this.setState({
                    password: password.substring(0, i)
                })
            }, sumRandom)
        }

    }




    render() {


        const { classes, theme } = this.props;
        const { password, username } = this.state;
        return (
            <div className={classes.root}>
                <header className={classes.header}>
                    <h1>
                        Respire
          </h1>
                </header>
                <form className={classes.form}>
                    <input className={classes.input} type='text' placeholder='Name' value={username}/>
                    <input className={classes.input} type='password' placeholder='Password' value={password}/>
                    <button
                        onClick={this.loginModal}
                        className={classes.loginBtn}>
                        Login
                    </button>
                    <button className={classes.signupBtn}>
                        <h4>Sign Up</h4>
                        <i className='material-icons'>keyboard_arrow_right</i>
                    </button>
                </form>
            </div>

        )
    }
}


export default withTheme(withStyles(styles)(LongCall))
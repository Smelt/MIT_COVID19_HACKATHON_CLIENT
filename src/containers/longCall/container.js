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
        optionModalOpen: false
    }


    toggleOptionModal = () => {
        this.setState((prevState, state) => ({
            optionModalOpen : !prevState.optionModalOpen
        }))
    }

    render() {
   

        const { classes, theme } = this.props
       
        return (
            <div className="login">

            </div>

        )
    }
}


export default withTheme(withStyles(styles)(LongCall))
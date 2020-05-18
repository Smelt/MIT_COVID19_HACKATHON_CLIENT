import React from 'react';
import { styles } from './styles';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


class Monitor extends React.Component {

    state = {
        bpm: 75,
        o2Levels: 95
    }

    refreshInterval = -1;

    componentDidMount() {
        let random = 750
        this.refreshInterval = setInterval(() => {
            random = Math.floor(Math.random() * 500) + 400; 
            this.setState({
                bpm: Math.floor(Math.random() * 5) + 70,
                o2Levels: Math.floor(Math.random() * 3) + 90
            })
        }, random)
    }

    componentWillUnmount() {
        clearInterval(this.refreshInterval);
    }

   
    
    render() {
        const { bpm, o2Levels } = this.state;
        const { classes, theme } = this.props;
        return (
            
            <div className={classes.root}>
                
                <h2 className={classes.title}>Monitor</h2>

                <div className={classes.liveMetrics}>
                    <div className={classes.heartRate}>
                        <h3>Pulse {bpm}</h3>
                    </div>
                    <div className={classes.oxygenMetric}>

                    </div>
                </div>
            </div>
        )
    }

}

export default withTheme(withStyles(styles)(Monitor))